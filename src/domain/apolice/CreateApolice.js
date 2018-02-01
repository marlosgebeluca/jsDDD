const Operation = require('src/domain/Operation');
const Apolice = require('src/domain/apolice/Apolice');

class CreateApolice extends Operation {
  constructor({ apoliceRepository }) {
    super();
    this.apoliceRepository = apoliceRepository;
  }

  async execute(apoliceData) {
    const { SUCCESS, ERROR, VALIDATION_ERROR } = this.outputs;
    const apolice = new Apolice(apoliceData);

    try {
      const { valid, errors } = apolice.validate();
      
      if(!valid) {
        const error = new Error('ValidationError');
        error.details = errors;
  
        throw error;
      }

      const newApolice = await this.apoliceRepository.add(apolice);

      this.emit(SUCCESS, newApolice);
    } catch(error) {
      if(error.message === 'ValidationError') {
        return this.emit(VALIDATION_ERROR, error);
      }

      this.emit(ERROR, error);
    }
  }
}

CreateApolice.setOutputs(['SUCCESS', 'ERROR', 'VALIDATION_ERROR']);

module.exports = CreateApolice;
