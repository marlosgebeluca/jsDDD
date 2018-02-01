const Operation = require('src/domain/Operation');
const Apolice = require('src/domain/apolice/Apolice');

class UpdateApolice extends Operation {
  constructor({ apoliceRepository }) {
    super();
    this.apoliceRepository = apoliceRepository;
  }

  async execute(apoliceId, apoliceData) {
    const {
      SUCCESS, NOT_FOUND, VALIDATION_ERROR, ERROR
    } = this.outputs;
    
    try {
      const apoliceAux = await this.apoliceRepository.getById(apoliceId);

      for (var key in apoliceData) {
        apoliceAux[key] = apoliceData[key];
      }

      const validacao = new Apolice(apoliceAux);
      const { valid, errors } = validacao.validate();
      
      if(!valid) {
        const error = new Error('ValidationError');
        error.details = errors;
  
        throw error;
      }

      const apolice = await this.apoliceRepository.update(apoliceId, apoliceData);
      this.emit(SUCCESS, apolice);
    } catch(error) {
      switch(error.message) {
      case 'ValidationError':
        return this.emit(VALIDATION_ERROR, error);
      case 'NotFoundError':
        return this.emit(NOT_FOUND, error);
      default:
        this.emit(ERROR, error);
      }
    }
  }
}

UpdateApolice.setOutputs(['SUCCESS', 'NOT_FOUND', 'VALIDATION_ERROR', 'ERROR']);

module.exports = UpdateApolice;
