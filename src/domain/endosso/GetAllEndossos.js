const Operation = require('src/domain/Operation');

class GetAllEndossos extends Operation {
  constructor({ endossoRepository }) {
    super();
    this.endossoRepository = endossoRepository;
  }

  async execute() {
    const { SUCCESS, ERROR } = this.outputs;

    try {
      const endossos = await this.endossoRepository.getAll({
        attributes: ['doc_num_proposta', 
          'doc_prop_apolice',
          'doc_tipo_movto',
          'cli_codigo',
          'cia_codigo',
          'ramo_codigo',
          'pto_codigo',
          'doc_endosso',
          'doc_endosso',
          'doc_data_proposta',
          'doc_data_emissao',
          'doc_data_entrada',
          'doc_inicio_vigencia',
          'doc_final_vigencia',
          'doc_qtd_parcelas',
          'doc_situacao',
          'doc_renov_numero',
          'cia_codigo_renov',
          'doc_anotacoes',
          'doc_comiss_adic',
          'doc_prop_ult_mov',
          'doc_tipo_comiss',
          'doc_agencia_debito',
          'doc_primeiraavista',
          'cli_codigo_estipulante',
          'doc_forma_pagamento',
          'cli_codigo_subestipulante',
          'doc_renovacao_interna',
          'doc_controle',
          'doc_prop_cancelada',
          'doc_bonus_indicacao',
          'ciareg_codigo',
          'moeda_codigo',
          'doc_premio_liquido',
          'cotac_data',
          'doc_adicional_frac',
          'doc_custo',
          'cli_codigo_indicacao',
          'doc_iof',
          'doc_premio_total',
          'doc_data_envio_proposta',
          'doc_perc_comissao',
          'estrut_codigo',
          'doc_perc_comissao_extra',
          'doc_comissao',
          'sitren_codigo',
          'doc_perc_comissao_total',
          'doc_data_distrenov',
          'doc_desc_comissao',
          'rrep_codigo',
          'doc_mes_base_renovacao',
          'doc_conta_debito',
          'doc_tipo_apolice',
          'doc_premio_servico_adic',
          'doc_endosso2',
          'doc_endosso2',
          'doc_primeira_parcela',
          'tpmov_codigo',
          'bco_codigo_debito',
          'aud_inclusao_usr',
          'aud_inclusao_data',
          'aud_alteracao_usr',
          'aud_alteracao_data',
          'doc_tipo6',
          'doc_num_proposta6',
          'doc_comissao_original',
          'flg_prob_endosso',
          'numpedido',
          'numsequencia',
          'doc_codigo_origem',
          'doc_identificacao',
          'doc_intervalo_venc',
          'doc_arquivo_numero',
          'doc_sigiloso',
          'doc_premio_liquido_original',
          'doc_adicional_frac_original',
          'doc_livro_numero_susep',
          'doc_livro_pagina_susep',
          'doc_livro_registro_susep',
          'cia_codigo_original',
          'pto_codigo_original',
          'ramo_codigo_original',
          'vend_codigos_original',
          'cco_codigos_original',
          'docori_codigo',
          'cn_codigo',
          'clidiv_codigo',
          'doc_data_recusa',
          'tpmov_codigo_recusa',
          'doc_cedente_boleto',
          'doc_codigo_negociacao',
          'doc_dia_vencimento',
          'doc_comiss_outros_servicos',
          'doc_num_prop_renovada',
          'doc_geracao_automatica']
      });

      this.emit(SUCCESS, endossos);
    } catch(error) {
      this.emit(ERROR, error);
    }
  }
}

GetAllEndossos.setOutputs(['SUCCESS', 'ERROR']);

module.exports = GetAllEndossos;
