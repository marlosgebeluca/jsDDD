const Operation = require('src/domain/Operation');

class GetEndosso extends Operation {
  constructor({ endossoRepository }) {
    super();
    this.endossoRepository = endossoRepository;
  }

  async execute(endossoId) {
    const { SUCCESS, NOT_FOUND } = this.outputs;

    try {
      const endosso = await this.endossoRepository.getById(endossoId);
      this.emit(SUCCESS, endosso);
    } catch(error) {
      this.emit(NOT_FOUND, {
        type: error.message,
        details: error.details
      });
    }
  }
}

GetEndosso.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = GetEndosso;
