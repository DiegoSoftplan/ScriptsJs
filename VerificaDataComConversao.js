const dataSaida = converterParaFormatoDesejado(model.DataSaida);
let dataAtual = new Date();

//Formata a data em AAAA/MM/DD
function converterParaFormatoDesejado(dataStr) {
    const partes = dataStr.split('/');
    const dia = partes[0];
    const mes = partes[1];
    const ano = partes[2];
    
    const dataFormatoDesejado = `${ano}/${mes}/${dia}`;
    
    return new Date(dataFormatoDesejado);
}

// Função para formatar a data no formato desejado (dd/mm/aaaa)
const formatarData = (data) => {
    let dia = adicionarZero(data.getDate());
    let mes = adicionarZero(data.getMonth() + 1); // Meses começam do zero
    let ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };
  
// Função para adicionar um zero à esquerda se o número for menor que 10
const adicionarZero = (numero) => {
if (numero < 10) {
    return `0${numero}`;
}
return numero;
};

//Inclui 10 dias na data atual
dataAtual.setDate(dataAtual.getDate() + 10);

// Formata a data atual
let dataFormatada = formatarData(dataAtual);

// Monta a mensagem de alerta
let mensagem = `Atenção: A data selecionada para a solicitação é inválida.

Prazo: As solicitações devem ser feitas com, no mínimo, 10 dias de antecedência.

Data Válida: A partir de ${dataFormatada}.

Orientação: Por favor, selecione uma data dentro do prazo permitido para prosseguir com a solicitação.`;

// Verifica se a dataSolicitacao é válida e se é posterior a dataAtual + 10 dias
if (dataSaida <= dataAtual) {
model.DataSaida = '';
alert(mensagem);
}