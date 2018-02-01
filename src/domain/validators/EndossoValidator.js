class Endosso {
  isValidTipoMovimento() {
    return this.doc_tipo_movto !== Endosso.TIPO_MOVIMENTO;
  }
}

Endosso.TIPO_MOVIMENTO = 'AP';
Endosso.TAMANHO_MAX_NUMERO_APOLICE = 30;

module.exports = Endosso;