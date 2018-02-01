const Operation = require('src/domain/Operation');

class DeleteApolice extends Operation {
  constructor({ apoliceRepository }) {
    super();
    this.apoliceRepository = apoliceRepository;
  }

  async execute(apoliceId) {
    const { SUCCESS, ERROR, NOT_FOUND } = this.outputs;

    try {
      await this.apoliceRepository.remove(apoliceId);
      this.emit(SUCCESS);
    } catch(error) {
      if(error.message === 'NotFoundError') {
        return this.emit(NOT_FOUND, error);
      }

      this.emit(ERROR, error);
    }
  }
}

DeleteApolice.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = DeleteApolice;
