function verificarComplemento(complemento) {
    return complemento && complemento.trim() !== "" ? complemento : 'undefined';
}

function verificarNumero(numero) {
    return typeof numero === 'undefined' ? 'S/N' : numero;
}

function construirEndereco(logradouro, numero, bairro, complemento, cidade, uf) {
    return complemento !== 'undefined' ? `${logradouro}, Nº ${numero}, ${complemento}, ${bairro}, ${cidade}/${uf}` : `${logradouro}, Nº ${numero}, ${bairro}, ${cidade}/${uf}`;
}

function verificarIdentificacaoUnidade(identificacaoUnidade) {
    return identificacaoUnidade && identificacaoUnidade.trim() !== "" ? identificacaoUnidade : "Sem Identificação";
}

function formatarCep(cep) {
    return cep ? cep.replace(/(\d{5})(\d{3})/, '$1-$2') : '';
}

function formatarDocumento(documento) {
    if (!documento) return '';
    
    documento = documento.replace(/\D/g, '');
    
    if (documento.length === 11) {
        return documento.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 'CPF: $1.$2.$3-$4');
    } else if (documento.length === 14) {
        return documento.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, 'CNPJ: $1.$2.$3/$4-$5');
    } else {
        return documento;
    }
}

let continuidadeTexto =`
acima discriminados, por meio deste TERMO DE RESPONSABILIDADE AUTODECLARATÓRIO, assumem, sob as penas da lei e cientes de sua responsabilidade administrativa, civil e criminal, que os registros e/ou anotações de responsabilidade ora apresentados, bem como sua execução, no que lhes forem aplicáveis, atenderão as exigências pelo cumprimento das leis federais, estaduais e municipais aplicáveis, leis de uso e ocupação do solo Lei Complementar 421/2020, código de obras, legislações urbanísticas e ambientais vigentes, legislação sanitária e de segurança, inclusive contra incêndios, de proteção aos direitos de vizinhança previstos no Código Civil Lei nº 10.406, de 10 de janeiro de 2002, as normas de acessibilidade aos portadores de deficiência e de mobilidade reduzida, de que trata o Decreto Federal nº 5.296, de 02 de dezembro de 2.004 e NBR 9050 (Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos) ou legislações aplicáveis que venham a alterá-las ou substituí-las, bem como das exigências das empresas concessionárias de serviços públicos e, em observância às Normas Brasileiras de Regulação – NBR, da Associação Brasileira de Normas Técnicas (ABNT).
    
Declaro que os serviços a serem executados na unidade autônoma não implicarão em danos ou causarão riscos à segurança e estabilidade do condomínio, incluindo, porém não se limitando à, áreas privativas, áreas comuns, estruturas, sistemas de utilidades.

No que tange especificamente a NBR 16.280, declaram atender todos os requisitos elencados na normativa.   

Declaram, também, o fiel cumprimento dos serviços e especificações das respectivas anotações de Responsabilidade ART e/ou RRT e das demais informações apresentadas neste processo, estando cientes de que o não cumprimento destas disposições poderá acarretar o EMBARGO e a aplicação de multas previstas na legislação, sem prejuízo das medidas jurídicas cabíveis e da devida comunicação do fato aos órgãos reguladores do exercício profissional.

É de responsabilidade integral do autor do projeto e do responsável técnico pela obra, o atendimento das exigências técnicas e legais quanto à distribuição das funções, usos, orientação, dimensionamento e localização dos ambientes internos da edificação; à especificação técnica dos elementos e componentes construtivos empregados na execução da obra; ao desempenho da edificação e de suas partes, assegurando as condições mínimas de uso, segurança, conforto, salubridade, acessibilidade e durabilidade.

A Prefeitura Municipal poderá, a qualquer momento, proceder à análise do processo, bem como realizar diligências para sua fiscalização.
`

//Proprietario
if (model.TipoSolicitante == 1) {
    // Dados do proprietário
    let documento = formatarDocumento(model.ndocumento);
    let nome = model.nome;
    let cep = formatarCep(model.cep);    let logradouro = model.Logradouro;
    let numero = verificarNumero(model.numero);
    let bairro = model.Bairro;
    let cidade = model.Cidade;
    let uf = model.Uf;
    let complemento = verificarComplemento(model.complemento);
    
    // Dados do responsável técnico pela execução
    let documentoExecucao = formatarDocumento(model.DocumentoExecucao);
    let nomeExecucao = model.NomeExecucao;
    let docExecucao = model.TipoDocExecucao == 1 ? `CREA - ART: ${model.ArtExecucao}` : `CAU - RRT: ${model.RrtExecucao}`;
    let cepExecucao =  formatarCep(model.CepExecucao);
    let logradouroExecucao = model.LogradouroExecucao;
    let numeroExecucao = verificarNumero(model.NumeroExecucao);
    let bairroExecucao = model.BairroExecucao;
    let cidadeExecucao = model.CidadeExecucao;
    let ufExecucao = model.UfExecucao;
    let complementoExecucao = verificarComplemento(model.ComplementoExecucao);

    // Local
    let uso = model.TipoUso == 1 ? "Residencial" : "Não Residencial";
    let logradouroLocal = model.LogradouroLocal;
    let numeroLocal = model.NumeroLocal;
    let bairroLocal = model.BairroLocal;
    let cidadeLocal = model.CidadeLocal;
    let ufLocal = model.UfLocal;
    let cpd = model.Cpd;
    let matricula = model.Matricula;
    let identificacaoUnidade = verificarIdentificacaoUnidade(model.IdentificacaoUnidade);

    // Dados do responsável técnico pelo projeto (condicional)
    let responsavelProjetoTexto = '';
    if (model.InformaResp == 1) {
        let documentoProjeto = formatarDocumento(model.DocumentoProjeto);
        let nomeProjeto = model.NomeProjeto;
        let docProjeto = model.TipoDocProjeto == 1 ? `CREA - ART: ${model.ArtProjeto}` : `CAU - RRT: ${model.RrtProjeto}`;
        let cepProjeto =  formatarCep(model.CepProjeto);
        let logradouroProjeto = model.LogradouroProjeto;
        let numeroProjeto = verificarNumero(model.NumeroProjeto);
        let bairroProjeto = model.BairroProjeto;
        let cidadeProjeto = model.CidadeProjeto;
        let ufProjeto = model.UfProjeto;
        let complementoProjeto = verificarComplemento(model.ComplementoProjeto);

        responsavelProjetoTexto = `
        Responsável Técnico pelo projeto: ${nomeProjeto}, ${documentoProjeto}, ${docProjeto}, ${construirEndereco(logradouroProjeto, numeroProjeto, bairroProjeto, complementoProjeto, cidadeProjeto, ufProjeto)}, ${cepProjeto}
        `;
    }

    // Construção do texto
    model.Texto = 
`TERMO DE RESPONSABILIDADE AUTODECLARATÓRIO 
DECRETO 20.077 DE 25 DE JULHO DE 2024
    
Objeto: Reforma em unidade autônoma privativa de condomínio sem ampliação ou redução de área construída.
Uso: ${uso}
Local: ${logradouroLocal}, Nº ${numeroLocal}, ${bairroLocal}, ${cidadeLocal}/${ufLocal}, ${model.CepLocal} - CPD: ${cpd} - Matrícula: ${matricula} - Identificação da Unidade: ${identificacaoUnidade}
Proprietário: ${nome}, ${documento}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}, ${cep}
Responsável Técnico pela execução: ${nomeExecucao}, ${documentoExecucao}, ${docExecucao}, ${construirEndereco(logradouroExecucao, numeroExecucao, bairroExecucao, complementoExecucao, cidadeExecucao, ufExecucao)}, ${cepExecucao}
${responsavelProjetoTexto.trim()}

O Responsável Técnico pela execução ${nomeExecucao}, ${documentoExecucao}, ${docExecucao}, ${construirEndereco(logradouroExecucao, numeroExecucao, bairroExecucao, complementoExecucao, cidadeExecucao, ufExecucao)}, ${cepExecucao}, o Autor do Projeto e o Proprietário da Obra ${nome}, ${documento}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}, ${cep} ${continuidadeTexto}

`;
}

//Procurador
if (model.TipoSolicitante == 3) {
    // Dados do proprietário
    let documento = formatarDocumento(model.ndocumento);
    let nome = model.nome;
    let cep = formatarCep(model.cep);    let logradouro = model.Logradouro;
    let numero = verificarNumero(model.numero);
    let bairro = model.Bairro;
    let cidade = model.Cidade;
    let uf = model.Uf;
    let complemento = verificarComplemento(model.complemento);
    
    let textoProcurador = model.TipoSolicitante == 3 ? `Representado pelo seu Procurador ${nome}, ${documento}, ${cep}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}` : `${nome}, ${documento}, ${cep}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}`;

    // Dados do Proprietário
    let documentoProp = formatarDocumento(model.DocumentoProp);
    let nomeProp = model.NomeProp;
    let cepProp = formatarCep(model.CepProp);
    let logradouroProp = model.LogradouroProp;
    let numeroProp = verificarNumero(model.NumeroProp);
    let bairroProp = model.BairroProp;
    let cidadeProp = model.CidadeProp;
    let ufProp = model.UfProp;
    let complementoProp = verificarComplemento(model.ComplementoProp);
    
    // Dados do responsável técnico pela execução
    let documentoExecucao = formatarDocumento(model.DocumentoExecucao);
    let nomeExecucao = model.NomeExecucao;
    let docExecucao = model.TipoDocExecucao == 1 ? `CREA - ART: ${model.ArtExecucao}` : `CAU - RRT: ${model.RrtExecucao}`;
    let cepExecucao =  formatarCep(model.CepExecucao);
    let logradouroExecucao = model.LogradouroExecucao;
    let numeroExecucao = verificarNumero(model.NumeroExecucao);
    let bairroExecucao = model.BairroExecucao;
    let cidadeExecucao = model.CidadeExecucao;
    let ufExecucao = model.UfExecucao;
    let complementoExecucao = verificarComplemento(model.ComplementoExecucao);

    // Local
    let uso = model.TipoUso == 1 ? "Residencial" : "Não Residencial";
    let logradouroLocal = model.LogradouroLocal;
    let numeroLocal = model.NumeroLocal;
    let bairroLocal = model.BairroLocal;
    let cidadeLocal = model.CidadeLocal;
    let ufLocal = model.UfLocal;
    let cpd = model.Cpd;
    let matricula = model.Matricula;
    let identificacaoUnidade = verificarIdentificacaoUnidade(model.IdentificacaoUnidade);

    // Dados do responsável técnico pelo projeto (condicional)
    let responsavelProjetoTexto = '';
    if (model.InformaResp == 1) {
        let documentoProjeto = formatarDocumento(model.DocumentoProjeto);
        let nomeProjeto = model.NomeProjeto;
        let docProjeto = model.TipoDocProjeto == 1 ? `CREA - ART: ${model.ArtProjeto}` : `CAU - RRT: ${model.RrtProjeto}`;
        let cepProjeto =  formatarCep(model.CepProjeto);
        let logradouroProjeto = model.LogradouroProjeto;
        let numeroProjeto = verificarNumero(model.NumeroProjeto);
        let bairroProjeto = model.BairroProjeto;
        let cidadeProjeto = model.CidadeProjeto;
        let ufProjeto = model.UfProjeto;
        let complementoProjeto = verificarComplemento(model.ComplementoProjeto);

        responsavelProjetoTexto = `
        Responsável Técnico pelo projeto: ${nomeProjeto}, ${documentoProjeto}, ${docProjeto}, ${construirEndereco(logradouroProjeto, numeroProjeto, bairroProjeto, complementoProjeto, cidadeProjeto, ufProjeto)}, ${cepProjeto}
        `;
    }

    // Construção do texto
    model.Texto = 
`TERMO DE RESPONSABILIDADE AUTODECLARATÓRIO 
DECRETO 20.077 DE 25 DE JULHO DE 2024
    
Objeto: Reforma em unidade autônoma privativa de condomínio sem ampliação ou redução de área construída.
Uso: ${uso}
Local: ${logradouroLocal}, Nº ${numeroLocal}, ${bairroLocal}, ${cidadeLocal}/${ufLocal}, ${model.CepLocal} - CPD: ${cpd} - Matrícula: ${matricula} - Identificação da Unidade: ${identificacaoUnidade}
Proprietário: ${nomeProp}, ${documentoProp}, ${construirEndereco(logradouroProp, numeroProp, bairroProp, complementoProp, cidadeProp, ufProp)}, ${cepProp}
Responsável Técnico pela execução: ${nomeExecucao}, ${documentoExecucao}, ${docExecucao}, ${construirEndereco(logradouroExecucao, numeroExecucao, bairroExecucao, complementoExecucao, cidadeExecucao, ufExecucao)}, ${cepExecucao}
${responsavelProjetoTexto.trim()}

O Responsável Técnico pela execução ${nomeExecucao}, ${documentoExecucao}, ${docExecucao}, ${construirEndereco(logradouroExecucao, numeroExecucao, bairroExecucao, complementoExecucao, cidadeExecucao, ufExecucao)}, ${cepExecucao}, o Autor do Projeto e o Proprietário da Obra ${nomeProp}, ${documentoProp}, ${construirEndereco(logradouroProp, numeroProp, bairroProp, complementoProp, cidadeProp, ufProp)}, ${cepProp}, ${textoProcurador} ${continuidadeTexto}`;
}

//Resposável pela Execução
if (model.TipoSolicitante == 2 && model.TipoResp == 1) {
    // Dados do responsável técnico pela execução
    let documento = formatarDocumento(model.ndocumento);
    let nome = model.nome;
    let cep = formatarCep(model.cep);    
    let logradouro = model.Logradouro;
    let numero = verificarNumero(model.numero);
    let bairro = model.Bairro;
    let cidade = model.Cidade;
    let uf = model.Uf;
    let complemento = verificarComplemento(model.complemento);
    let docExecucao = model.TipoDoc == 1 ? `CREA - ART: ${model.Art}` : `CAU - RRT: ${model.Rrt}`;

    // Dados do Proprietário
    let documentoProp = formatarDocumento(model.DocumentoProp);
    let nomeProp = model.NomeProp;
    let cepProp = formatarCep(model.CepProp);
    let logradouroProp = model.LogradouroProp;
    let numeroProp = verificarNumero(model.NumeroProp);
    let bairroProp = model.BairroProp;
    let cidadeProp = model.CidadeProp;
    let ufProp = model.UfProp;
    let complementoProp = verificarComplemento(model.ComplementoProp);

    // Local
    let uso = model.TipoUso == 1 ? "Residencial" : "Não Residencial";
    let logradouroLocal = model.LogradouroLocal;
    let numeroLocal = model.NumeroLocal;
    let bairroLocal = model.BairroLocal;
    let cidadeLocal = model.CidadeLocal;
    let ufLocal = model.UfLocal;
    let cpd = model.Cpd;
    let matricula = model.Matricula;
    let identificacaoUnidade = verificarIdentificacaoUnidade(model.IdentificacaoUnidade);

    // Dados do responsável técnico pelo projeto (condicional)
    let responsavelProjetoTexto = '';
    if (model.InformaResp == 1) {
        let documentoProjeto = formatarDocumento(model.DocumentoProjeto);
        let nomeProjeto = model.NomeProjeto;
        let docProjeto = model.TipoDocProjeto == 1 ? `CREA - ART:${model.ArtProjeto}` : `CAU - RRT: ${model.RrtProjeto}`;
        let cepProjeto = formatarCep(model.CepProjeto);
        let logradouroProjeto = model.LogradouroProjeto;
        let numeroProjeto = verificarNumero(model.NumeroProjeto);
        let bairroProjeto = model.BairroProjeto;
        let cidadeProjeto = model.CidadeProjeto;
        let ufProjeto = model.UfProjeto;
        let complementoProjeto = verificarComplemento(model.ComplementoProjeto);

        responsavelProjetoTexto = `
        Responsável Técnico pelo projeto: ${nomeProjeto}, ${documentoProjeto}, ${docProjeto}, ${construirEndereco(logradouroProjeto, numeroProjeto, bairroProjeto, complementoProjeto, cidadeProjeto, ufProjeto)}, ${cepProjeto}
        `;
    }

    // Construção do texto
    model.Texto = 
    `TERMO DE RESPONSABILIDADE AUTODECLARATÓRIO 
    DECRETO 20.077 DE 25 DE JULHO DE 2024
     
    Objeto: Reforma em unidade autônoma privativa de condomínio sem ampliação ou redução de área construída.
    Uso: ${uso}
    Local: ${logradouroLocal}, ${numeroLocal}, ${bairroLocal}, ${cidadeLocal}, ${ufLocal}, ${model.CepLocal} - CPD: ${cpd} - Matrícula: ${matricula} - Identificação da Unidade: ${identificacaoUnidade}
    Proprietário: ${nomeProp}, ${documentoProp}, ${construirEndereco(logradouroProp, numeroProp, bairroProp, complementoProp, cidadeProp, ufProp)}, ${cepProp}
    Responsável Técnico pela execução: ${nome}, ${documento}, ${docExecucao}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}, ${cep}
    ${responsavelProjetoTexto.trim()}

    O Responsável Técnico pela execução ${nome}, ${documento}, ${docExecucao}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}, ${cep}, o Autor do Projeto e o Proprietário da Obra ${nomeProp}, ${documentoProp}, , ${construirEndereco(logradouroProp, numeroProp, bairroProp, complementoProp, cidadeProp, ufProp)}, ${cepProp}, ${continuidadeTexto}`;
}

//Resposável pela Projeto
if (model.TipoSolicitante == 2 && model.TipoResp == 2) {

    // Dados do responsável técnico pela Projeto
    let documento = formatarDocumento(model.ndocumento);
    let nome = model.nome;
    let cep = formatarCep(model.cep);    let logradouro = model.Logradouro;
    let numero = verificarNumero(model.numero);
    let bairro = model.Bairro;
    let cidade = model.Cidade;
    let uf = model.Uf;
    let complemento = verificarComplemento(model.complemento);
    let docProjeto = model.TipoDoc == 1 ? `CREA - ART: ${model.Art}` : `CAU - RRT: ${model.Rrt}`;

    // Dados do Proprietário
    let documentoProp = formatarDocumento(model.DocumentoProp);
    let nomeProp = model.NomeProp;
    let cepProp = formatarCep(model.CepProp);
    let logradouroProp = model.LogradouroProp;
    let numeroProp = verificarNumero(model.NumeroProp);
    let bairroProp = model.BairroProp;
    let cidadeProp = model.CidadeProp;
    let ufProp = model.UfProp;
    let complementoProp = verificarComplemento(model.ComplementoProp);
        
    // Dados do responsável técnico pela execução
    let documentoExecucao = formatarDocumento(model.DocumentoExecucao);
    let nomeExecucao = model.NomeExecucao;
    let docExecucao = model.TipoDocExecucao == 1 ? `CREA - ART: ${model.ArtExecucao}` : `CAU - RRT: ${model.RrtExecucao}`;
    let cepExecucao = formatarCep(model.CepExecucao);
    let logradouroExecucao = model.LogradouroExecucao;
    let numeroExecucao = verificarNumero(model.NumeroExecucao);
    let bairroExecucao = model.BairroExecucao;
    let cidadeExecucao = model.CidadeExecucao;
    let ufExecucao = model.UfExecucao;
    let complementoExecucao = verificarComplemento(model.ComplementoExecucao);

    // Local
    let uso = model.TipoUso == 1 ? "Residencial" : "Não Residencial";
    let logradouroLocal = model.LogradouroLocal;
    let numeroLocal = model.NumeroLocal;
    let bairroLocal = model.BairroLocal;
    let cidadeLocal = model.CidadeLocal;
    let ufLocal = model.UfLocal;
    let cpd = model.Cpd;
    let matricula = model.Matricula;
    let identificacaoUnidade = verificarIdentificacaoUnidade(model.IdentificacaoUnidade);

    // Construção do texto
    model.Texto = 
    `TERMO DE RESPONSABILIDADE AUTODECLARATÓRIO 
    DECRETO 20.077 DE 25 DE JULHO DE 2024
     
    Objeto: Reforma em unidade autônoma privativa de condomínio sem ampliação ou redução de área construída.
    Uso: ${uso}
    Local: ${logradouroLocal}, ${numeroLocal}, ${bairroLocal}, ${cidadeLocal}, ${ufLocal} ${model.CepLocal} - CPD: ${cpd} - Matrícula: ${matricula} - Identificação da Unidade: ${identificacaoUnidade}
    Proprietário: ${nomeProp}, ${documentoProp}, ${construirEndereco(logradouroProp, numeroProp, bairroProp, complementoProp, cidadeProp, ufProp)}, ${cepProp}
    Responsável Técnico pela execução: ${nomeExecucao}, ${documentoExecucao}, ${docExecucao}, ${construirEndereco(logradouroExecucao, numeroExecucao, bairroExecucao, complementoExecucao, cidadeExecucao, ufExecucao)}, ${cepExecucao}
    Responsável Técnico pelo projeto: ${nome}, ${documento}, ${docProjeto}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}, ${cep}

    O Responsável Técnico pela execução: ${nomeExecucao}, ${documentoExecucao},${docExecucao} , ${construirEndereco(logradouroExecucao, numeroExecucao, bairroExecucao, complementoExecucao, cidadeExecucao, ufExecucao)}, ${cepExecucao}, o Autor do Projeto: ${nome}, ${documento}, ${docProjeto}, ${construirEndereco(logradouro, numero, bairro, complemento, cidade, uf)}, ${cep} e o Proprietário da Obra: ${nomeProp}, ${documentoProp}, ${construirEndereco(logradouroProp, numeroProp, bairroProp, complementoProp, cidadeProp, ufProp)}, ${cepProp}, ${continuidadeTexto}`;
}