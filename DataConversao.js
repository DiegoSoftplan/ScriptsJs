debugger
const dataSaida = converteData(model.DataSaida);
const dataChegada = converteData(model.DataChegada);

//Formata a data em AAAA/MM/DD
function converteData(dataStr) {
    const partes = dataStr.split('/');
    const dia = partes[0];
    const mes = partes[1];
    const ano = partes[2];
    
    const dataFormatoDesejado = `${ano}/${mes}/${dia}`;
    
    return new Date(dataFormatoDesejado);
}

// Monta a mensagem de alerta
let mensagem = `Aviso: A data de Chegada não pode ser anterior à data de saída. Favor selecionar uma data posterior.`;

// Verifica se a de chegada é menor que a data des aída
if (dataChegada < dataSaida) {
model.DataChegada = '';
alert(mensagem);
}