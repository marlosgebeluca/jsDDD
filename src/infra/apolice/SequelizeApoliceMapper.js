const Apolice = require('src/domain/apolice/Apolice');

const SequelizeApoliceMapper = {
  toEntity({ dataValues }) {
    const { 
      doc_num_proposta,
      doc_prop_apolice,
      doc_tipo_movto,
      cli_codigo,
      cia_codigo,
      ramo_codigo,
      pto_codigo,
      doc_apolice,
      doc_endosso,
      doc_data_proposta,
      doc_data_emissao,
      doc_data_entrada,
      doc_inicio_vigencia,
      doc_final_vigencia,
      doc_qtd_parcelas,
      doc_situacao,
      doc_renov_numero,
      cia_codigo_renov,
      doc_anotacoes,
      doc_comiss_adic,
      doc_prop_ult_mov,
      doc_tipo_comiss,
      doc_agencia_debito,
      doc_primeiraavista,
      cli_codigo_estipulante,
      doc_forma_pagamento,
      cli_codigo_subestipulante,
      doc_renovacao_interna,
      doc_controle,
      doc_prop_cancelada,
      doc_bonus_indicacao,
      ciareg_codigo,
      moeda_codigo,
      doc_premio_liquido,
      cotac_data,
      doc_adicional_frac,
      doc_custo,
      cli_codigo_indicacao,
      doc_iof,
      doc_premio_total,
      doc_data_envio_proposta,
      doc_perc_comissao,
      estrut_codigo,
      doc_perc_comissao_extra,
      doc_comissao,
      sitren_codigo,
      doc_perc_comissao_total,
      doc_data_distrenov,
      doc_desc_comissao,
      rrep_codigo,
      doc_mes_base_renovacao,
      doc_conta_debito,
      doc_tipo_apolice,
      doc_premio_servico_adic,
      doc_endosso2,
      doc_apolice2,
      doc_primeira_parcela,
      tpmov_codigo,
      bco_codigo_debito,
      aud_inclusao_usr,
      aud_inclusao_data,
      aud_alteracao_usr,
      aud_alteracao_data,
      doc_tipo6,
      doc_num_proposta6,
      doc_comissao_original,
      flg_prob_endosso,
      numpedido,
      numsequencia,
      doc_codigo_origem,
      doc_identificacao,
      doc_intervalo_venc,
      doc_arquivo_numero,
      doc_sigiloso,
      doc_premio_liquido_original,
      doc_adicional_frac_original,
      doc_livro_numero_susep,
      doc_livro_pagina_susep,
      doc_livro_registro_susep,
      cia_codigo_original,
      pto_codigo_original,
      ramo_codigo_original,
      vend_codigos_original,
      cco_codigos_original,
      docori_codigo,
      cn_codigo,
      clidiv_codigo,
      doc_data_recusa,
      tpmov_codigo_recusa,
      doc_cedente_boleto,
      doc_codigo_negociacao,
      doc_dia_vencimento,
      doc_comiss_outros_servicos,
      doc_num_prop_renovada,
      doc_geracao_automatica,
      
    } = dataValues;

    const id = doc_num_proposta;
    const propostaApolice = doc_prop_apolice;
    const tipoDoMovimento = doc_tipo_movto;
    const numeroDaApolice = doc_apolice;
    const idCliente = cli_codigo;
    const idSeguradora = cia_codigo;
    const idRamo = ramo_codigo;
    const idPonto = pto_codigo;
    const numeroDoEndosso = doc_endosso;
    const dataDaProposta = doc_data_proposta;
    const dataDaEmissao = doc_data_emissao;
    const dataDeEntrada = doc_data_entrada;
    const inicioDaVigencia = doc_inicio_vigencia;
    const finalDaVigencia = doc_final_vigencia;
    const quantidadeDeParcelas = doc_qtd_parcelas;
    const situacaoDoDocumento = doc_situacao;
    const numeroDaRenovacao = doc_renov_numero;
    const idSeguradoraRenovada = cia_codigo_renov;
    const anotacoes = doc_anotacoes;
    const comissaoAdicioinal = doc_comiss_adic;
    const ultimoMovimentoProposta = doc_prop_ult_mov;
    const tipoDeComissao = doc_tipo_comiss;
    const agenciaParaDebito = doc_agencia_debito;
    const primeiraAvista = doc_primeiraavista;
    const idClienteEstipulante = cli_codigo_estipulante;
    const formaDePagamento = doc_forma_pagamento;
    const idClienteSubEstipulante = cli_codigo_subestipulante;
    const renovacaoInterna = doc_renovacao_interna;
    const controle = doc_controle;
    const propostaCancelada = doc_prop_cancelada;
    const bonusIndicacao = doc_bonus_indicacao;
    const idSeguradoraReg = ciareg_codigo;
    const idMoeda = moeda_codigo;
    const premioLiquido = doc_premio_liquido;
    const dataDaCotacao = cotac_data;
    const fracaoAdicional = doc_adicional_frac;
    const custo = doc_custo;
    const idClienteIndicacao = cli_codigo_indicacao;
    const iof = doc_iof;
    const premioTotal = doc_premio_total;
    const dataDeEnvioDaProposta = doc_data_envio_proposta;
    const percentualDeComissao = doc_perc_comissao;
    const idEstrutura = estrut_codigo;
    const percentualDeComissaoExtra = doc_perc_comissao_extra;
    const comissao = doc_comissao;
    const idSitren = sitren_codigo;
    const percentualDeComissaoTotal = doc_perc_comissao_total;
    const dataDistRenovada = doc_data_distrenov;
    const descComissao = doc_desc_comissao;
    const idRrep = rrep_codigo;
    const mesBaseRenovacao = doc_mes_base_renovacao;
    const contaParaDebito = doc_conta_debito;
    const tipoDaApolice = doc_tipo_apolice;
    const premioDeServicoAdicional = doc_premio_servico_adic;
    const endosso2 = doc_endosso2;
    const apolice2 = doc_apolice2;
    const primeiraParcela = doc_primeira_parcela;
    const idTipoMovimento = tpmov_codigo;
    const codigoDoBancoParaDebito = bco_codigo_debito;
    const usuarioInclusaoAuditoria = aud_inclusao_usr;
    const dataDeInclusaoAuditoria = aud_inclusao_data;
    const usuarioAlteracaoAuditoria = aud_alteracao_usr;
    const dataDeAlteracaoAuditoria = aud_alteracao_data;
    const tipo6 = doc_tipo6;
    const numeroDaProposta6 = doc_num_proposta6;
    const comissaoOriginal = doc_comissao_original;
    const flgProbEndosso = flg_prob_endosso;
    const numeroDoPedido = numpedido;
    const numeroDaSequencia = numsequencia;
    const idOrigem = doc_codigo_origem;
    const identificacao = doc_identificacao;
    const intervaloDeVencimento = doc_intervalo_venc;
    const numeroDoArquivo = doc_arquivo_numero;
    const sigiloso = doc_sigiloso;
    const premioLiquidoOriginal = doc_premio_liquido_original;
    const fracaoAdicionalOriginal = doc_adicional_frac_original;
    const livroNumeroSusep = doc_livro_numero_susep;
    const livroPaginaSusep = doc_livro_pagina_susep;
    const livroRegistroSusep = doc_livro_registro_susep;
    const idSeguradoraOriginal = cia_codigo_original;
    const idPontoOriginal = pto_codigo_original;
    const idRamoOriginal = ramo_codigo_original;
    const idVendedorOriginal = vend_codigos_original;
    const idCcoOriginal = cco_codigos_original;
    const idDocori = docori_codigo;
    const idCn = cn_codigo;
    const idCliDiv = clidiv_codigo;
    const dataRecusa = doc_data_recusa;
    const idTipoMovimentoRecusa = tpmov_codigo_recusa;
    const cedenteBoleto = doc_cedente_boleto;
    const idNegociacao = doc_codigo_negociacao;
    const diaDoVencimento = doc_dia_vencimento;
    const comissaoDeOutrosServicos = doc_comiss_outros_servicos;
    const numeroDaPropostaRenvoada = doc_num_prop_renovada;
    const geracaoAutomatica = doc_geracao_automatica;
    let endossos = [];

    return new Apolice({ 
      id,
      propostaApolice,
      tipoDoMovimento,
      numeroDaApolice,
      idCliente,
      idSeguradora,
      idRamo,
      idPonto,
      numeroDoEndosso,
      dataDaProposta,
      dataDaEmissao,
      dataDeEntrada,
      inicioDaVigencia,
      finalDaVigencia,
      quantidadeDeParcelas,
      situacaoDoDocumento,
      numeroDaRenovacao,
      idSeguradoraRenovada,
      anotacoes,
      comissaoAdicioinal,
      ultimoMovimentoProposta,
      tipoDeComissao,
      agenciaParaDebito,
      primeiraAvista,
      idClienteEstipulante,
      formaDePagamento,
      idClienteSubEstipulante,
      renovacaoInterna,
      controle,
      propostaCancelada,
      bonusIndicacao,
      idSeguradoraReg,
      idMoeda,
      premioLiquido,
      dataDaCotacao,
      fracaoAdicional,
      custo,
      idClienteIndicacao,
      iof,
      premioTotal,
      dataDeEnvioDaProposta,
      percentualDeComissao,
      idEstrutura,
      percentualDeComissaoExtra,
      comissao,
      idSitren,
      percentualDeComissaoTotal,
      dataDistRenovada,
      descComissao,
      idRrep,
      mesBaseRenovacao,
      contaParaDebito,
      tipoDaApolice,
      premioDeServicoAdicional,
      endosso2,
      apolice2,
      primeiraParcela,
      idTipoMovimento,
      codigoDoBancoParaDebito,
      usuarioInclusaoAuditoria,
      dataDeInclusaoAuditoria,
      usuarioAlteracaoAuditoria,
      dataDeAlteracaoAuditoria,
      tipo6,
      numeroDaProposta6,
      comissaoOriginal,
      flgProbEndosso,
      numeroDoPedido,
      numeroDaSequencia,
      idOrigem,
      identificacao,
      intervaloDeVencimento,
      numeroDoArquivo,
      sigiloso,
      premioLiquidoOriginal,
      fracaoAdicionalOriginal,
      livroNumeroSusep,
      livroPaginaSusep,
      livroRegistroSusep,
      idSeguradoraOriginal,
      idPontoOriginal,
      idRamoOriginal,
      idVendedorOriginal,
      idCcoOriginal,
      idDocori,
      idCn,
      idCliDiv,
      dataRecusa,
      idTipoMovimentoRecusa,
      cedenteBoleto,
      idNegociacao,
      diaDoVencimento,
      comissaoDeOutrosServicos,
      numeroDaPropostaRenvoada,
      geracaoAutomatica,
      endossos
    });
  },

  toDatabase(survivor) {
    const { 
      propostaApolice,
      tipoDoMovimento,
      numeroDaApolice,
      idCliente,
      idSeguradora,
      idRamo,
      idPonto,
      numeroDoEndosso,
      dataDaProposta,
      dataDaEmissao,
      dataDeEntrada,
      inicioDaVigencia,
      finalDaVigencia,
      quantidadeDeParcelas,
      situacaoDoDocumento,
      numeroDaRenovacao,
      idSeguradoraRenovada,
      anotacoes,
      comissaoAdicioinal,
      ultimoMovimentoProposta,
      tipoDeComissao,
      agenciaParaDebito,
      primeiraAvista,
      idClienteEstipulante,
      formaDePagamento,
      idClienteSubEstipulante,
      renovacaoInterna,
      controle,
      propostaCancelada,
      bonusIndicacao,
      idSeguradoraReg,
      idMoeda,
      premioLiquido,
      dataDaCotacao,
      fracaoAdicional,
      custo,
      idClienteIndicacao,
      iof,
      premioTotal,
      dataDeEnvioDaProposta,
      percentualDeComissao,
      idEstrutura,
      percentualDeComissaoExtra,
      comissao,
      idSitren,
      percentualDeComissaoTotal,
      dataDistRenovada,
      descComissao,
      idRrep,
      mesBaseRenovacao,
      contaParaDebito,
      tipoDaApolice,
      premioDeServicoAdicional,
      endosso2,
      apolice2,
      primeiraParcela,
      idTipoMovimento,
      codigoDoBancoParaDebito,
      usuarioInclusaoAuditoria,
      dataDeInclusaoAuditoria,
      usuarioAlteracaoAuditoria,
      dataDeAlteracaoAuditoria,
      tipo6,
      numeroDaProposta6,
      comissaoOriginal,
      flgProbEndosso,
      numeroDoPedido,
      numeroDaSequencia,
      idOrigem,
      identificacao,
      intervaloDeVencimento,
      numeroDoArquivo,
      sigiloso,
      premioLiquidoOriginal,
      fracaoAdicionalOriginal,
      livroNumeroSusep,
      livroPaginaSusep,
      livroRegistroSusep,
      idSeguradoraOriginal,
      idPontoOriginal,
      idRamoOriginal,
      idVendedorOriginal,
      idCcoOriginal,
      idDocori,
      idCn,
      idCliDiv,
      dataRecusa,
      idTipoMovimentoRecusa,
      cedenteBoleto,
      idNegociacao,
      diaDoVencimento,
      comissaoDeOutrosServicos,
      numeroDaPropostaRenvoada,
      geracaoAutomatica
      
    } = survivor;

    const doc_prop_apolice = propostaApolice;
    const doc_tipo_movto = tipoDoMovimento;
    const doc_apolice = numeroDaApolice;
    const cli_codigo = idCliente;
    const cia_codigo = idSeguradora;
    const ramo_codigo = idRamo;
    const pto_codigo = idPonto;
    const doc_endosso = numeroDoEndosso;
    const doc_data_proposta = dataDaProposta;
    const doc_data_emissao = dataDaEmissao;
    const doc_data_entrada = dataDeEntrada;
    const doc_inicio_vigencia = inicioDaVigencia;
    const doc_final_vigencia = finalDaVigencia;
    const doc_qtd_parcelas = quantidadeDeParcelas;
    const doc_situacao = situacaoDoDocumento;
    const doc_renov_numero = numeroDaRenovacao;
    const cia_codigo_renov = idSeguradoraRenovada;
    const doc_anotacoes = anotacoes;
    const doc_comiss_adic = comissaoAdicioinal;
    const doc_prop_ult_mov = ultimoMovimentoProposta;
    const doc_tipo_comiss = tipoDeComissao;
    const doc_agencia_debito = agenciaParaDebito;
    const doc_primeiraavista = primeiraAvista;
    const cli_codigo_estipulante = idClienteEstipulante;
    const doc_forma_pagamento = formaDePagamento;
    const cli_codigo_subestipulante = idClienteSubEstipulante;
    const doc_renovacao_interna = renovacaoInterna;
    const doc_controle = controle;
    const doc_prop_cancelada = propostaCancelada;
    const doc_bonus_indicacao = bonusIndicacao;
    const ciareg_codigo = idSeguradoraReg;
    const moeda_codigo = idMoeda;
    const doc_premio_liquido = premioLiquido;
    const cotac_data = dataDaCotacao;
    const doc_adicional_frac = fracaoAdicional;
    const doc_custo = custo;
    const cli_codigo_indicacao = idClienteIndicacao;
    const doc_iof = iof;
    const doc_premio_total = premioTotal;
    const doc_data_envio_proposta = dataDeEnvioDaProposta;
    const doc_perc_comissao = percentualDeComissao;
    const estrut_codigo = idEstrutura;
    const doc_perc_comissao_extra = percentualDeComissaoExtra;
    const doc_comissao = comissao;
    const sitren_codigo = idSitren;
    const doc_perc_comissao_total = percentualDeComissaoTotal;
    const doc_data_distrenov = dataDistRenovada;
    const doc_desc_comissao = descComissao;
    const rrep_codigo = idRrep;
    const doc_mes_base_renovacao = mesBaseRenovacao;
    const doc_conta_debito = contaParaDebito;
    const doc_tipo_apolice = tipoDaApolice;
    const doc_premio_servico_adic = premioDeServicoAdicional;
    const doc_endosso2 = endosso2;
    const doc_apolice2 = apolice2;
    const doc_primeira_parcela = primeiraParcela;
    const tpmov_codigo = idTipoMovimento;
    const bco_codigo_debito = codigoDoBancoParaDebito;
    const aud_inclusao_usr = usuarioInclusaoAuditoria;
    const aud_inclusao_data = dataDeInclusaoAuditoria;
    const aud_alteracao_usr = usuarioAlteracaoAuditoria;
    const aud_alteracao_data = dataDeAlteracaoAuditoria;
    const doc_tipo6 = tipo6;
    const doc_num_proposta6 = numeroDaProposta6;
    const doc_comissao_original = comissaoOriginal;
    const flg_prob_endosso = flgProbEndosso;
    const numpedido = numeroDoPedido;
    const numsequencia = numeroDaSequencia;
    const doc_codigo_origem = idOrigem;
    const doc_identificacao = identificacao;
    const doc_intervalo_venc = intervaloDeVencimento;
    const doc_arquivo_numero = numeroDoArquivo;
    const doc_sigiloso = sigiloso;
    const doc_premio_liquido_original = premioLiquidoOriginal;
    const doc_adicional_frac_original = fracaoAdicionalOriginal;
    const doc_livro_numero_susep = livroNumeroSusep;
    const doc_livro_pagina_susep = livroPaginaSusep;
    const doc_livro_registro_susep = livroRegistroSusep;
    const cia_codigo_original = idSeguradoraOriginal;
    const pto_codigo_original = idPontoOriginal;
    const ramo_codigo_original = idRamoOriginal;
    const vend_codigos_original = idVendedorOriginal;
    const cco_codigos_original = idCcoOriginal;
    const docori_codigo = idDocori;
    const cn_codigo = idCn;
    const clidiv_codigo = idCliDiv;
    const doc_data_recusa = dataRecusa;
    const tpmov_codigo_recusa = idTipoMovimentoRecusa;
    const doc_cedente_boleto = cedenteBoleto;
    const doc_codigo_negociacao = idNegociacao;
    const doc_dia_vencimento = diaDoVencimento;
    const doc_comiss_outros_servicos = comissaoDeOutrosServicos;
    const doc_num_prop_renovada = numeroDaPropostaRenvoada;
    const doc_geracao_automatica = geracaoAutomatica;

    return { 
      doc_prop_apolice,
      doc_tipo_movto,
      cli_codigo,
      cia_codigo,
      ramo_codigo,
      pto_codigo,
      doc_apolice,
      doc_endosso,
      doc_data_proposta,
      doc_data_emissao,
      doc_data_entrada,
      doc_inicio_vigencia,
      doc_final_vigencia,
      doc_qtd_parcelas,
      doc_situacao,
      doc_renov_numero,
      cia_codigo_renov,
      doc_anotacoes,
      doc_comiss_adic,
      doc_prop_ult_mov,
      doc_tipo_comiss,
      doc_agencia_debito,
      doc_primeiraavista,
      cli_codigo_estipulante,
      doc_forma_pagamento,
      cli_codigo_subestipulante,
      doc_renovacao_interna,
      doc_controle,
      doc_prop_cancelada,
      doc_bonus_indicacao,
      ciareg_codigo,
      moeda_codigo,
      doc_premio_liquido,
      cotac_data,
      doc_adicional_frac,
      doc_custo,
      cli_codigo_indicacao,
      doc_iof,
      doc_premio_total,
      doc_data_envio_proposta,
      doc_perc_comissao,
      estrut_codigo,
      doc_perc_comissao_extra,
      doc_comissao,
      sitren_codigo,
      doc_perc_comissao_total,
      doc_data_distrenov,
      doc_desc_comissao,
      rrep_codigo,
      doc_mes_base_renovacao,
      doc_conta_debito,
      doc_tipo_apolice,
      doc_premio_servico_adic,
      doc_endosso2,
      doc_apolice2,
      doc_primeira_parcela,
      tpmov_codigo,
      bco_codigo_debito,
      aud_inclusao_usr,
      aud_inclusao_data,
      aud_alteracao_usr,
      aud_alteracao_data,
      doc_tipo6,
      doc_num_proposta6,
      doc_comissao_original,
      flg_prob_endosso,
      numpedido,
      numsequencia,
      doc_codigo_origem,
      doc_identificacao,
      doc_intervalo_venc,
      doc_arquivo_numero,
      doc_sigiloso,
      doc_premio_liquido_original,
      doc_adicional_frac_original,
      doc_livro_numero_susep,
      doc_livro_pagina_susep,
      doc_livro_registro_susep,
      cia_codigo_original,
      pto_codigo_original,
      ramo_codigo_original,
      vend_codigos_original,
      cco_codigos_original,
      docori_codigo,
      cn_codigo,
      clidiv_codigo,
      doc_data_recusa,
      tpmov_codigo_recusa,
      doc_cedente_boleto,
      doc_codigo_negociacao,
      doc_dia_vencimento,
      doc_comiss_outros_servicos,
      doc_num_prop_renovada,
      doc_geracao_automatica
      
    };
  },

  dicionario(entidade){
    let model = [];
    
    model.doc_prop_apolice = entidade.propostaApolice;
    model.doc_tipo_movto = entidade.tipoDoMovimento;
    model.doc_apolice = entidade.numeroDaApolice;
    model.cli_codigo = entidade.idCliente;
    model.cia_codigo = entidade.idSeguradora;
    model.ramo_codigo = entidade.idRamo;
    model.pto_codigo = entidade.idPonto;
    model.doc_endosso = entidade.numeroDoEndosso;
    model.doc_data_proposta = entidade.dataDaProposta;
    model.doc_data_emissao = entidade.dataDaEmissao;
    model.doc_data_entrada = entidade.dataDeEntrada;
    model.doc_inicio_vigencia = entidade.inicioDaVigencia;
    model.doc_final_vigencia = entidade.finalDaVigencia;
    model.doc_qtd_parcelas = entidade.quantidadeDeParcelas;
    model.doc_situacao = entidade.situacaoDoDocumento;
    model.doc_renov_numero = entidade.numeroDaRenovacao;
    model.cia_codigo_renov = entidade.idSeguradoraRenovada;
    model.doc_anotacoes = entidade.anotacoes;
    model.doc_comiss_adic = entidade.comissaoAdicioinal;
    model.doc_prop_ult_mov = entidade.ultimoMovimentoProposta;
    model.doc_tipo_comiss = entidade.tipoDeComissao;
    model.doc_agencia_debito = entidade.agenciaParaDebito;
    model.doc_primeiraavista = entidade.primeiraAvista;
    model.cli_codigo_estipulante = entidade.idClienteEstipulante;
    model.doc_forma_pagamento = entidade.formaDePagamento;
    model.cli_codigo_subestipulante = entidade.idClienteSubEstipulante;
    model.doc_renovacao_interna = entidade.renovacaoInterna;
    model.doc_controle = entidade.controle;
    model.doc_prop_cancelada = entidade.propostaCancelada;
    model.doc_bonus_indicacao = entidade.bonusIndicacao;
    model.ciareg_codigo = entidade.idSeguradoraReg;
    model.moeda_codigo = entidade.idMoeda;
    model.doc_premio_liquido = entidade.premioLiquido;
    model.cotac_data = entidade.dataDaCotacao;
    model.doc_adicional_frac = entidade.fracaoAdicional;
    model.doc_custo = entidade.custo;
    model.cli_codigo_indicacao = entidade.idClienteIndicacao;
    model.doc_iof = entidade.iof;
    model.doc_premio_total = entidade.premioTotal;
    model.doc_data_envio_proposta = entidade.dataDeEnvioDaProposta;
    model.doc_perc_comissao = entidade.percentualDeComissao;
    model.estrut_codigo = entidade.idEstrutura;
    model.doc_perc_comissao_extra = entidade.percentualDeComissaoExtra;
    model.doc_comissao = entidade.comissao;
    model.sitren_codigo = entidade.idSitren;
    model.doc_perc_comissao_total = entidade.percentualDeComissaoTotal;
    model.doc_data_distrenov = entidade.dataDistRenovada;
    model.doc_desc_comissao = entidade.descComissao;
    model.rrep_codigo = entidade.idRrep;
    model.doc_mes_base_renovacao = entidade.mesBaseRenovacao;
    model.doc_conta_debito = entidade.contaParaDebito;
    model.doc_tipo_apolice = entidade.tipoDaApolice;
    model.doc_premio_servico_adic = entidade.premioDeServicoAdicional;
    model.doc_endosso2 = entidade.endosso2;
    model.doc_apolice2 = entidade.apolice2;
    model.doc_primeira_parcela = entidade.primeiraParcela;
    model.tpmov_codigo = entidade.idTipoMovimento;
    model.bco_codigo_debito = entidade.codigoDoBancoParaDebito;
    model.aud_inclusao_usr = entidade.usuarioInclusaoAuditoria;
    model.aud_inclusao_data = entidade.dataDeInclusaoAuditoria;
    model.aud_alteracao_usr = entidade.usuarioAlteracaoAuditoria;
    model.aud_alteracao_data = entidade.dataDeAlteracaoAuditoria;
    model.doc_tipo6 = entidade.tipo6;
    model.doc_num_proposta6 = entidade.numeroDaProposta6;
    model.doc_comissao_original = entidade.comissaoOriginal;
    model.flg_prob_endosso = entidade.flgProbEndosso;
    model.numpedido = entidade.numeroDoPedido;
    model.numsequencia = entidade.numeroDaSequencia;
    model.doc_codigo_origem = entidade.idOrigem;
    model.doc_identificacao = entidade.identificacao;
    model.doc_intervalo_venc = entidade.intervaloDeVencimento;
    model.doc_arquivo_numero = entidade.numeroDoArquivo;
    model.doc_sigiloso = entidade.sigiloso;
    model.doc_premio_liquido_original = entidade.premioLiquidoOriginal;
    model.doc_adicional_frac_original = entidade.fracaoAdicionalOriginal;
    model.doc_livro_numero_susep = entidade.livroNumeroSusep;
    model.doc_livro_pagina_susep = entidade.livroPaginaSusep;
    model.doc_livro_registro_susep = entidade.livroRegistroSusep;
    model.cia_codigo_original = entidade.idSeguradoraOriginal;
    model.pto_codigo_original = entidade.idPontoOriginal;
    model.ramo_codigo_original = entidade.idRamoOriginal;
    model.vend_codigos_original = entidade.idVendedorOriginal;
    model.cco_codigos_original = entidade.idCcoOriginal;
    model.docori_codigo = entidade.idDocori;
    model.cn_codigo = entidade.idCn;
    model.clidiv_codigo = entidade.idCliDiv;
    model.doc_data_recusa = entidade.dataRecusa;
    model.tpmov_codigo_recusa = entidade.idTipoMovimentoRecusa;
    model.doc_cedente_boleto = entidade.cedenteBoleto;
    model.doc_codigo_negociacao = entidade.idNegociacao;
    model.doc_dia_vencimento = entidade.diaDoVencimento;
    model.doc_comiss_outros_servicos = entidade.comissaoDeOutrosServicos;
    model.doc_num_prop_renovada = entidade.numeroDaPropostaRenvoada;
    model.doc_geracao_automatica = entidade.geracaoAutomatica;

    return model;
  }
};

module.exports = SequelizeApoliceMapper;
