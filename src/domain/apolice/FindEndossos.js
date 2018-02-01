const Operation = require('src/domain/Operation');

class FindEndossos extends Operation {
  constructor({ apoliceRepository }) {
    super();
    this.apoliceRepository = apoliceRepository;
  }

  async execute(apoliceId) {
    const { SUCCESS, NOT_FOUND } = this.outputs;

    try {
      const endossos = await this.apoliceRepository.findEndossos(apoliceId);
      this.emit(SUCCESS, endossos);
    } catch(error) {
      this.emit(NOT_FOUND, {
        type: error.message,
        details: error.details
      });
    }
  }
}

FindEndossos.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = FindEndossos;
