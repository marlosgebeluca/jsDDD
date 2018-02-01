const Operation = require('src/domain/Operation');
const Endosso = require('src/domain/endosso/Endosso');

class CreateEndosso extends Operation {
  constructor({ endossoRepository }) {
    super();
    this.endossoRepository = endossoRepository;
  }

  async execute(endossoData) {
    const { SUCCESS, ERROR, VALIDATION_ERROR } = this.outputs;
    const endosso = new Endosso(endossoData);

    try {
      const { valid, errors } = endosso.validate();
      
      if(!valid) {
        const error = new Error('ValidationError');
        error.details = errors;
  
        throw error;
      }

      const newEndosso = await this.endossoRepository.add(endosso);

      this.emit(SUCCESS, newEndosso);
    } catch(error) {
      if(error.message === 'ValidationError') {
        return this.emit(VALIDATION_ERROR, error);
      }

      this.emit(ERROR, error);
    }
  }
}

CreateEndosso.setOutputs(['SUCCESS', 'ERROR', 'VALIDATION_ERROR']);

module.exports = CreateEndosso;
