const { attributes } = require('structure');
const { apoliceValidator } = require('../validators');

const Apolice = attributes({
  id : Number,

  propostaApolice : {
    type: Number,
    required: true
  },

  tipoDoMovimento : {
    type: String,
    required: true,
    exactLength:2,
    upperCase: true,
    equal: 'AP'
  },

  numeroDaApolice: {
    type: String,
    maxLength: 30,
    empty: true,
    regex: /([a-zA-Z]{3}\-\d{4})/g
  },

  idCliente : {
    type: Number,
    required: true,
    empty: true
  },

  idSeguradora : {
    type: Number,
    required: true,
    empty: true
  },

  idRamo : {
    type: Number,
    required: true,
    empty: true
  },

  idPonto : {
    type: Number,
    required: true,
    empty: true
  },

  numeroDoEndosso : {
    type: String,
    maxLength: 30,
    empty: true
  },

  dataDaProposta : {
    type: String,
    //Validar regex Data,
    empty: true
  },

  dataDaEmissao : {
    type: String,
    //Validar regex Data,
    empty: true
  },

  dataDeEntrada : {
    type: String,
    //Validar regex Data,
    empty: true
  },

  inicioDaVigencia : {
    type: String,
    //Validar regex Data,
    empty: true
  },

  finalDaVigencia : {
    type: String,
    //Validar regex Data,
    empty: true
  },

  quantidadeDeParcelas : {
    type: Number,
    empty: true
  },

  situacaoDoDocumento : {
    type: String,
    exactLength: 1,
    empty: true
  },

  numeroDaRenovacao : {
    type: String,
    maxLength: 30,
    empty: true
  },

  idSeguradoraRenovada : {
    type: Number
  },

  anotacoes : {
    type: String,
    empty: true
  },

  comissaoAdicioinal : {
    type: String,
    exactLength: 1,
    empty: true
  },

  ultimoMovimentoProposta : {
    type: Number,
    empty: true
  },

  tipoDeComissao : {
    type: String,
    exactLength: 1,
    empty: true
  },

  agenciaParaDebito : {
    type: String,
    maxLength: 10,
    empty: true
  },

  primeiraAvista : {
    type: String,
    exactLength: 1,
    empty: true
  },

  idClienteEstipulante : {
    type: Number,
    empty: true
  },

  formaDePagamento : {
    type: String,
    exactLength: 1,
    empty: true
  },

  idClienteSubEstipulante : {
    type: Number
  },

  renovacaoInterna : {
    type: String,
    exactLength: 1,
    empty: true
  },

  controle : {
    type: String,
    maxLength: 30,
    empty: true
  },

  propostaCancelada : {
    type: String,
    maxLength: 25,
    empty: true
  },

  bonusIndicacao : {
    type: Number,
    empty: true
  },

  idSeguradoraReg : {
    type: Number,
    empty: true
  },

  idMoeda : {
    type: Number,
    empty: true
  },

  premioLiquido : {
    type: Number,
    empty: true
  },

  dataDaCotacao : {
    type: String,
    //Validar regex Data,
    empty: true
  },

  fracaoAdicional : {
    type: Number,
    empty: true
  },

  custo : {
    type: Number,
    empty: true
  },

  idClienteIndicacao : {
    type: Number,
    empty: true
  },

  iof : {
    type: Number,
    empty: true
  },

  premioTotal : {
    type: Number,
    empty: true
  },

  dataDeEnvioDaProposta : {
    type: String,
    //Validar data regex,
    empty: true
  },

  percentualDeComissao : {
    type: Number,
    empty: true
  },

  idEstrutura : {
    type: Number,
    empty: true
  },

  percentualDeComissaoExtra : {
    type: Number,
    empty: true
  },

  comissao : {
    type: Number,
    empty: true
  },

  idSitren : {
    type: Number,
    empty: true
  },

  percentualDeComissaoTotal : {
    type: String,
    maxLength: 30,
    empty: true
  },

  dataDistRenovada : {
    type: String,
    //Validar data regex,
    empty: true
  },

  descComissao : {
    type: Number,
    empty: true
  },

  idRrep : {
    type: Number,
    empty: true
  },

  mesBaseRenovacao : {
    type: String,
    maxLength: 7,
    empty: true
  },

  contaParaDebito : {
    type: String,
    maxLength: 25,
    empty: true
  },

  tipoDaApolice : {
    type: String,
    maxLength: 2,
    empty: true
  },

  premioDeServicoAdicional : {
    type: Number,
    empty: true
  },

  endosso2 : {
    type: String,
    maxLength: 30,
    empty: true
  },

  apolice2 : {
    type: String,
    maxLength: 30,
    empty: true
  },

  primeiraParcela : {
    type: Number,
    empty: true
  },

  idTipoMovimento : {
    type: Number,
    empty: true
  },

  codigoDoBancoParaDebito : {
    type: Number,
    empty: true
  },

  usuarioInclusaoAuditoria : {
    type: String,
    maxLength: 50,
    empty: true
  },

  dataDeInclusaoAuditoria : {
    type: String,
    //Validar data regex,
    empty: true
  },

  usuarioAlteracaoAuditoria : {
    type: String,
    maxLength: 50,
    empty: true
  },

  dataDeAlteracaoAuditoria : {
    type: String,
    //Validar data regex,
    empty: true
  },

  tipo6 : {
    type: String,
    exactLength: 1,
    empty: true
  },

  numeroDaProposta6 : {
    type: Number,
    empty: true
  },

  comissaoOriginal : {
    type: Number,
    empty: true
  },

  flgProbEndosso : {
    type: String,
    exactLength: 1,
    empty: true
  },

  numeroDoPedido : {
    type: Number,
    empty: true
  },

  numeroDaSequencia : {
    type: Number,
    empty: true
  },

  idOrigem : {
    type: Number,
    empty: true
  },

  identificacao : {
    type: String,
    maxLength: 50,
    empty: true
  },

  intervaloDeVencimento : {
    type: Number,
    empty: true
  },

  numeroDoArquivo : {
    type: String,
    maxLength: 20,
    empty: true
  },

  sigiloso : {
    type: String,
    exactLength: 1,
    empty: true
  },

  premioLiquidoOriginal : {
    type: Number,
    empty: true
  },

  fracaoAdicionalOriginal : {
    type: Number,
    empty: true
  },

  livroNumeroSusep : {
    type: String,
    maxLength: 30,
    empty: true
  },

  livroPaginaSusep : {
    type: String,
    maxLength: 30,
    empty: true
  },

  livroRegistroSusep : {
    type: String,
    maxLength: 30,
    empty: true
  },

  idSeguradoraOriginal : {
    type: Number,
    empty: true
  },

  idPontoOriginal : {
    type: Number,
    empty: true
  },

  idRamoOriginal : {
    type: Number,
    empty: true
  },

  idVendedorOriginal : {
    type: String,
    maxLength: 20,
    empty: true
  },

  idCcoOriginal : {
    type: String,
    maxLength: 20,
    empty: true
  },

  idDocori : {
    type: Number,
    empty: true
  },

  idCn : {
    type: Number,
    empty: true
  },

  idCliDiv : {
    type: Number,
    empty: true
  },

  dataRecusa : {
    type: String,
    //validar data regex,
    empty: true
  },

  idTipoMovimentoRecusa : {
    type: Number,
    empty: true
  },

  cedenteBoleto : {
    type: Number,
    empty: true
  },

  idNegociacao : {
    type: String,
    maxLength: 50,
    empty: true
  },

  diaDoVencimento : {
    type: Number,
    empty: true
  },

  comissaoDeOutrosServicos : {
    type: String,
    maxLength: 1,
    empty: true
  },

  numeroDaPropostaRenvoada : {
    type: Number,
    empty: true
  },

  geracaoAutomatica  : {
    type: String,
    exactLength: 1,
    empty: true
  },

  endossos: {
    type: Array,
    itemType: Number
  }
})(apoliceValidator);

module.exports = Apolice;
