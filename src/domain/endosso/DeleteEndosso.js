const Operation = require('src/domain/Operation');

class DeleteEndosso extends Operation {
  constructor({ endossoRepository }) {
    super();
    this.endossoRepository = endossoRepository;
  }

  async execute(endossoId) {
    const { SUCCESS, ERROR, NOT_FOUND } = this.outputs;

    try {
      await this.endossoRepository.remove(endossoId);
      this.emit(SUCCESS);
    } catch(error) {
      if(error.message === 'NotFoundError') {
        return this.emit(NOT_FOUND, error);
      }

      this.emit(ERROR, error);
    }
  }
}

DeleteEndosso.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = DeleteEndosso;
