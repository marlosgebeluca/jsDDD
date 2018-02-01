const Operation = require('src/domain/Operation');

class GetApolice extends Operation {
  constructor({ apoliceRepository }) {
    super();
    this.apoliceRepository = apoliceRepository;
  }

  async execute(apoliceId) {
    const { SUCCESS, NOT_FOUND } = this.outputs;

    try {
      let apolice = await this.apoliceRepository.getById(apoliceId);
      const endossos = await this.apoliceRepository.findEndossos(apoliceId);

      for (var key in endossos) {
        var endosso = endossos[key];
        apolice.endossos.push(endosso.id);
      }
      
      this.emit(SUCCESS, apolice);
    } catch(error) {
      this.emit(NOT_FOUND, {
        type: error.message,
        details: error.details
      });
    }
  }
}

GetApolice.setOutputs(['SUCCESS', 'ERROR', 'NOT_FOUND']);

module.exports = GetApolice;
