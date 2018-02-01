const ApoliceMapper = require('./SequelizeApoliceMapper');

class SequelizeApolicesRepository {
  constructor({ ApoliceModel }) {
    this.ApoliceModel = ApoliceModel;
  }

  async getAll(...args) {
    const apolices = await this.ApoliceModel.findAll(...args);
    
    return apolices.filter(apo => {
      return apo.doc_tipo_movto === 'AP';
    }).map(ApoliceMapper.toEntity);
  }

  async getById(doc_num_proposta) {
    const apolice = await this._getById(doc_num_proposta);
    return apolice.doc_tipo_movto === 'AP' ? ApoliceMapper.toEntity(apolice) : null;
  }

  async add(apolice) {
    const newApolice = await this.ApoliceModel.create(ApoliceMapper.toDatabase(apolice));
    return ApoliceMapper.toEntity(newApolice);
  }

  async remove(doc_num_proposta) {
    const apolice = await this._getById(doc_num_proposta);

    await apolice.destroy();
    return;
  }

  async update(doc_num_proposta, newData) {
    const apolice = await this._getById(doc_num_proposta);
    const transaction = await this.ApoliceModel.sequelize.transaction();

    const novosDados = ApoliceMapper.dicionario(newData);

    try {
      const updatedApolice = await apolice.update(novosDados, { transaction });
      await transaction.commit();

      return ApoliceMapper.toEntity(updatedApolice);
    } catch(error) {
      await transaction.rollback();

      throw error;
    }
  }

  async count() {
    return await this.ApoliceModel.count();
  }

  // Private
  async _getById(doc_num_proposta) {
    try {
      return await this.ApoliceModel.findById(doc_num_proposta, { rejectOnEmpty: true });
    } catch(error) {
      if(error.name === 'SequelizeEmptyResultError') {
        const notFoundError = new Error('NotFoundError');
        notFoundError.details = `Apolice with doc_num_proposta ${doc_num_proposta} can't be found.`;

        throw notFoundError;
      }

      throw error;
    }
  }

  async findEndossos(doc_num_proposta){
    try {
      const endossos = await this.ApoliceModel.findAll({where: {doc_prop_apolice: doc_num_proposta}});

      return endossos.filter(end => {
        return end.doc_tipo_movto !== 'AP';
      }).map(ApoliceMapper.toEntity);

    } catch(error) {
      if(error.name === 'SequelizeEmptyResultError') {
        const notFoundError = new Error('NotFoundError');
        notFoundError.details = `Apolice with doc_num_proposta ${doc_num_proposta} can't be found.`;

        throw notFoundError;
      }

      throw error;
    }  
  }
}

module.exports = SequelizeApolicesRepository;
