const assunto = {
    1: "Inquérito Civil",
    2: "Representação Civil",
    3: "Notícia de Fato",
    4: "Procedimento Administrativo de Acompanhamento",
    5: "Procedimento Preparatório de Inquérito Civil",
    6: "Procedimento Administrativo de Natureza Individual",
    7: "Peça de Informação",
    8: "Ficha de Atendimento",
    9: "Procedimento Administrativo de Fiscalização",
    10: "Outros"
};

// Verifica se o assunto e os números de procedimento e ofício estão disponíveis
const assuntoDescricao = assunto[model.Assunto] || "Assunto desconhecido";
const numProcedimento = model.NumProcedimento || "N/A";
const numOficio = model.NumOficio || "N/A";

// Monta a descrição
model.descricao = `${assuntoDescricao} - Proced. ${numProcedimento} - Ofício ${numOficio}`;