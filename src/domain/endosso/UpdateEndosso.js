const Operation = require('src/domain/Operation');
const Endosso = require('src/domain/endosso/Endosso');

class UpdateEndosso extends Operation {
  constructor({ endossoRepository }) {
    super();
    this.endossoRepository = endossoRepository;
  }

  async execute(endossoId, endossoData) {
    const {
      SUCCESS, NOT_FOUND, VALIDATION_ERROR, ERROR
    } = this.outputs;

    try {
      const endossoAux = await this.endossoRepository.getById(endossoId);
      
      for (var key in endossoData) {
        endossoAux[key] = endossoData[key];
      }

      const validacao = new Endosso(endossoAux);
      const { valid, errors } = validacao.validate();
      
      if(!valid) {
        const error = new Error('ValidationError');
        error.details = errors;
  
        throw error;
      }

      const endosso = await this.endossoRepository.update(endossoId, endossoData);
      this.emit(SUCCESS, endosso);
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

UpdateEndosso.setOutputs(['SUCCESS', 'NOT_FOUND', 'VALIDATION_ERROR', 'ERROR']);

module.exports = UpdateEndosso;
