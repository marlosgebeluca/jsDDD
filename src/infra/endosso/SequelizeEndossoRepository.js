const EndossoMapper = require('./SequelizeEndossoMapper');

class SequelizeEndossosRepository {
  constructor({ EndossoModel }) {
    this.EndossoModel = EndossoModel;
  }

  async getAll(...args) {
    const endossos = await this.EndossoModel.findAll(...args);
    
    return endossos.filter(apo => {
      return apo.doc_tipo_movto !== 'AP';
    }).map(EndossoMapper.toEntity);
  }

  async getById(doc_num_proposta) {
    const endosso = await this._getById(doc_num_proposta);
    return endosso.doc_tipo_movto !== 'AP' ? EndossoMapper.toEntity(endosso) : null;
  }

  async add(endosso) {
    const newEndosso = await this.EndossoModel.create(EndossoMapper.toDatabase(endosso));
    return EndossoMapper.toEntity(newEndosso);
  }

  async remove(doc_num_proposta) {
    const endosso = await this._getById(doc_num_proposta);

    await endosso.destroy();
    return;
  }

  async update(doc_num_proposta, newData) {
    const endosso = await this._getById(doc_num_proposta);
    const transaction = await this.EndossoModel.sequelize.transaction();

    const novosDados = EndossoMapper.dicionario(newData);

    try {
      const updatedEndosso = await endosso.update(novosDados, { transaction });
      await transaction.commit();

      return EndossoMapper.toEntity(updatedEndosso);
    } catch(error) {
      await transaction.rollback();

      throw error;
    }
  }

  async count() {
    return await this.EndossoModel.count();
  }

  // Private

  async _getById(doc_num_proposta) {
    try {
      return await this.EndossoModel.findById(doc_num_proposta, { rejectOnEmpty: true });
    } catch(error) {
      if(error.name === 'SequelizeEmptyResultError') {
        const notFoundError = new Error('NotFoundError');
        notFoundError.details = `Endosso with doc_num_proposta ${doc_num_proposta} can't be found.`;

        throw notFoundError;
      }

      throw error;
    }
  }
}

module.exports = SequelizeEndossosRepository;
