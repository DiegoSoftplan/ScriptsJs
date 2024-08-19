// Define a quantidade de dias úteis
const diaUtil = 15;

// Lista de feriados
const feriados = [
  //Federal
  "01/01", // Confraternização Universal (Ano Novo)
  "21/04", // Tiradentes
  "01/05", // Dia do Trabalho
  "07/09", // Independência do Brasil
  "12/10", // Nossa Senhora Aparecida (Padroeira do Brasil)
  "02/11", // Finados
  "15/11", // Proclamação da República
  "25/12", // Natal

  //Estatual
  "09/07", // Revolução Constitucionalista de 1932

  //Municipal - Que não se altera
  "13/06", // Santo Antonio
  "20/11", // Consciência Negra
  "08/12", // Imaculada Conceição

  //Municipal - Que se altera
  "29/03", // Sexta-feira Santa
  "30/05", // Corpus Christi

  //Pontos Facultativos
  "12/02", // Carnaval
  "13/02", // Carnaval
  "14/02", // Carnaval
  "31/05", // Corpus Christi
  "14/06", // Santo Antonio
  "08/07", // Revolução Constitucionalista de 1932
  "24/12", // Véspera de Natal
  "31/12" // Véspera de Ano Novo
];

//Formata Data para DD/MM
function formatarData(data) {
  const dia = ("0" + data.getDate()).slice(-2);
  const mes = ("0" + (data.getMonth() + 1)).slice(-2);
  return `${dia}/${mes}`;
}

// Verificar se um dia é útil
function verificaDiaUtil(data) {
  const diaDaSemana = data.getDay();
  const dataFormatada = formatarData(data);
  // Verifica se é dia útil (sábado (6), domingo (0) ou feriado)
  return diaDaSemana !== 0 && diaDaSemana !== 6 && !feriados.includes(dataFormatada);
}

//Verifica último dia de Dezembro (Se Necessário)
function verificaDezembro(ano) {
  const ultimoDiaDezembro = new Date(ano, 11, 31);
  let dataAtual = ultimoDiaDezembro;

  // Loop para encontrar o último dia útil de dezembro
  while (!verificaDiaUtil(dataAtual)) {
    dataAtual.setDate(dataAtual.getDate() - 1);
  }

  return dataAtual;
}

//Verifica 15º dia útil do mês
function verificaDia() {
  //Define a quantidade de dias úteis
  const diaUtil = 15;
  
  const hoje = new Date();
  // Pega o proximo mês
  let mes = hoje.getMonth() + 1;
  let ano = hoje.getFullYear();

  //Verifica se o proximo mês é Dezembro
  if (mes > 11) {
    return verificaDezembro(ano);
  }

  const primeiroDiaDoProximoMes = new Date(ano, mes, 1);

  let contadorDeDiasUteis = 0;
  let dataAtual = primeiroDiaDoProximoMes;

  while (contadorDeDiasUteis < diaUtil) {
    if (verificaDiaUtil(dataAtual)) {
      contadorDeDiasUteis++;
    }
    if (contadorDeDiasUteis < diaUtil) {
      dataAtual.setDate(dataAtual.getDate() + 1);
    }
  }

  return dataAtual;
}


  // Encontrar o 1º dia útil do próximo mês
  function primeiroDiaUtil() {
    const hoje = new Date();
    let mes = hoje.getMonth() + 1; // Próximo mês
    let ano = hoje.getFullYear();
  
    // if (proximoMes > 11) { // Se o próximo mês for dezembro, avança para o próximo ano
    //   proximoMes = 0; // Janeiro
    //   proximoAno++;
    // }
  
    const primeiroDia = new Date(ano, mes, 1);
  
    while (!verificaDiaUtil(primeiroDia)) {
      primeiroDia.setDate(primeiroDia.getDate() + 1);
    }
  
    return primeiroDia;
  }

  const dataPrimeiroUtil = primeiroDiaUtil();
  console.log(`Primeiro dia útil: ${dataPrimeiroUtil.toISOString()}`);
  
  const dataDiaUtil = verificaDia();
  console.log(`${diaUtil}º dia útil: ${dataDiaUtil.toISOString()}`);