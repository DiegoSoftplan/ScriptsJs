function converterStringParaData(dataString) {
    var partesData = dataString.split("/"); 
    var dia = parseInt(partesData[0], 10); 
    var mes = parseInt(partesData[1], 10) - 1;
    var ano = parseInt(partesData[2], 10); 

    var data = new Date(ano, mes, dia);

    return data;
}

//Pega data atual
var dataAtual = new Date();
//Zera horas
dataAtual.setHours(0, 0, 0, 0);

//Converte data string
var dataInserida = converterStringParaData(model.prazo);

//Verifica data
if (dataInserida  < dataAtual) {
    exibeAlerta("Favor inserir uma data superior que a data atual");
    model.prazo = ''
}