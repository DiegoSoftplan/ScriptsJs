// Lista de feriados (mantida igual)
const feriados = [
  //Lista de feriados
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

// Formata Data para DD/MM
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

// Encontrar o último dia útil do mês atual
function ultimoDiaUtil() {
  const hoje = new Date();
  const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0); // Último dia do mês atual

  let diaUtil = new Date(ultimoDiaMes);

  while (!verificaDiaUtil(diaUtil)) {
      diaUtil.setDate(diaUtil.getDate() - 1);
  }

  return diaUtil;
}

const data = ultimoDiaUtil();
console.log(data.toISOString());