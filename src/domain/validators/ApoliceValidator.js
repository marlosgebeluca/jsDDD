class Apolice {
  isValidTipoMovimento() {
    return this.doc_tipo_movto === Apolice.TIPO_MOVIMENTO;
  }
}

Apolice.TIPO_MOVIMENTO = 'AP';

module.exports = Apolice;