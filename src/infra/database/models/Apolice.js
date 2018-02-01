'use strict';

module.exports = function(sequelize, DataTypes) {
  const Apolice = sequelize.define('emdoctos', {
    doc_num_proposta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    doc_prop_apolice: DataTypes.INTEGER, 
    doc_tipo_movto: DataTypes.STRING, 
    cli_codigo : DataTypes.INTEGER,
    doc_apolice: DataTypes.STRING,
    cia_codigo : DataTypes.INTEGER,
    ramo_codigo : DataTypes.INTEGER,
    pto_codigo : DataTypes.INTEGER,
    doc_endosso : DataTypes.STRING,
    doc_data_proposta : DataTypes.STRING,
    doc_data_emissao : DataTypes.STRING,
    doc_data_entrada : DataTypes.STRING,
    doc_inicio_vigencia : DataTypes.STRING,
    doc_final_vigencia : DataTypes.STRING,
    doc_qtd_parcelas : DataTypes.STRING,
    doc_situacao : DataTypes.STRING,
    doc_renov_numero : DataTypes.STRING,
    cia_codigo_renov : DataTypes.INTEGER,
    doc_anotacoes : DataTypes.STRING,
    doc_comiss_adic : DataTypes.STRING,
    doc_prop_ult_mov : DataTypes.STRING,
    doc_tipo_comiss : DataTypes.STRING,
    doc_agencia_debito : DataTypes.STRING,
    doc_primeiraavista : DataTypes.STRING,
    cli_codigo_estipulante : DataTypes.INTEGER,
    doc_forma_pagamento : DataTypes.STRING,
    cli_codigo_subestipulante : DataTypes.INTEGER,
    doc_renovacao_interna : DataTypes.STRING,
    doc_controle : DataTypes.STRING,
    doc_prop_cancelada : DataTypes.STRING,
    doc_bonus_indicacao : DataTypes.STRING,
    ciareg_codigo : DataTypes.INTEGER,
    moeda_codigo : DataTypes.INTEGER,
    doc_premio_liquido : DataTypes.STRING,
    cotac_data : DataTypes.STRING,
    doc_adicional_frac : DataTypes.STRING,
    doc_custo : DataTypes.STRING,
    cli_codigo_indicacao : DataTypes.INTEGER,
    doc_iof : DataTypes.STRING,
    doc_premio_total : DataTypes.STRING,
    doc_data_envio_proposta : DataTypes.STRING,
    doc_perc_comissao : DataTypes.STRING,
    estrut_codigo : DataTypes.INTEGER,
    doc_perc_comissao_extra : DataTypes.STRING,
    doc_comissao : DataTypes.STRING,
    sitren_codigo : DataTypes.INTEGER,
    doc_perc_comissao_total : DataTypes.STRING,
    doc_data_distrenov : DataTypes.STRING,
    doc_desc_comissao : DataTypes.STRING,
    rrep_codigo : DataTypes.INTEGER,
    doc_mes_base_renovacao : DataTypes.STRING,
    doc_conta_debito : DataTypes.STRING,
    doc_tipo_apolice : DataTypes.STRING,
    doc_premio_servico_adic : DataTypes.STRING,
    doc_endosso2 : DataTypes.STRING,
    doc_apolice2 : DataTypes.STRING,
    doc_primeira_parcela : DataTypes.STRING,
    tpmov_codigo : DataTypes.INTEGER,
    bco_codigo_debito : DataTypes.INTEGER,
    aud_inclusao_usr : DataTypes.STRING,
    aud_inclusao_data : DataTypes.STRING,
    aud_alteracao_usr : DataTypes.STRING,
    aud_alteracao_data : DataTypes.STRING,
    doc_tipo6 : DataTypes.STRING,
    doc_num_proposta6 : DataTypes.STRING,
    doc_comissao_original : DataTypes.STRING,
    flg_prob_endosso : DataTypes.STRING,
    numpedido : DataTypes.STRING,
    numsequencia : DataTypes.STRING,
    doc_codigo_origem : DataTypes.INTEGER,
    doc_identificacao : DataTypes.STRING,
    doc_intervalo_venc : DataTypes.STRING,
    doc_arquivo_numero : DataTypes.STRING,
    doc_sigiloso : DataTypes.STRING,
    doc_premio_liquido_original : DataTypes.STRING,
    doc_adicional_frac_original : DataTypes.STRING,
    doc_livro_numero_susep : DataTypes.STRING,
    doc_livro_pagina_susep : DataTypes.STRING,
    doc_livro_registro_susep : DataTypes.STRING,
    cia_codigo_original : DataTypes.INTEGER,
    pto_codigo_original : DataTypes.INTEGER,
    ramo_codigo_original : DataTypes.INTEGER,
    vend_codigos_original : DataTypes.INTEGER,
    cco_codigos_original : DataTypes.INTEGER,
    docori_codigo : DataTypes.INTEGER,
    cn_codigo : DataTypes.INTEGER,
    clidiv_codigo : DataTypes.INTEGER,
    doc_data_recusa : DataTypes.STRING,
    tpmov_codigo_recusa : DataTypes.INTEGER,
    doc_cedente_boleto : DataTypes.STRING,
    doc_codigo_negociacao : DataTypes.INTEGER,
    doc_dia_vencimento : DataTypes.STRING,
    doc_comiss_outros_servicos : DataTypes.STRING,
    doc_num_prop_renovada : DataTypes.STRING,
    doc_geracao_automatica : DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate() {
        // associations can be defined here
      }
    }
  });

  return Apolice;
};
