//////////////////////////////TELEFONE/////////////////////////////

// Aplicar a máscara ao valor do telefone
function aplicarMascaraTelefone(valor) {
  valor = valor.replace(/\D/g, '');

  if (valor.length > 11) {
    valor = valor.slice(0, 11);
  }

  if (valor.length === 11) {
    return valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // (XX) XXXXX-XXXX
  } else if (valor.length === 10) {
    return valor.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3"); // (XX) XXXX-XXXX
  }

  return valor;
}

// Função para configurar a máscara de telefone em um campo
function configurarMascaraTelefone(campo) {
  function aplicarMascara() {
    const valorAtual = campo.value;
    const valorFormatado = aplicarMascaraTelefone(valorAtual);

    if (valorAtual !== valorFormatado) {
      campo.value = valorFormatado;
    }
  }

  campo.addEventListener("input", aplicarMascara);
  campo.addEventListener("blur", aplicarMascara);

  // Aplica a máscara ao carregar o valor inicial
  aplicarMascara();
}

// Configura as máscaras para os campos de telefone
const campoTelefone = document.getElementById("Telefone");
if (campoTelefone) {
  configurarMascaraTelefone(campoTelefone);
}

const campoTelefoneCnpj = document.getElementById("TelefoneCnpj");
if (campoTelefoneCnpj) {
  configurarMascaraTelefone(campoTelefoneCnpj);
}

//////////////////////////////CEP/////////////////////////////

// Função para aplicar a máscara ao valor do CEP
function aplicarMascaraCEP(valor) {
  valor = valor.replace(/\D/g, '');

  if (valor.length > 8) {
    valor = valor.slice(0, 8);
  }

  if (valor.length === 8) {
    return valor.replace(/(\d{5})(\d{3})/, "$1-$2");
  }

  return valor;
}

// Função para configurar a máscara de CEP em um campo
function configurarMascaraCEP(campo) {
  function aplicarMascara() {
    const valorAtual = campo.value;
    const valorFormatado = aplicarMascaraCEP(valorAtual);

    if (valorAtual !== valorFormatado) {
      campo.value = valorFormatado;
    }
  }

  campo.addEventListener("input", aplicarMascara);
  campo.addEventListener("blur", aplicarMascara);

  aplicarMascara();
}

///////////////////////CAMPOS QUE SE APLICA A MASCARA (CAMPOS DO SISTEMA)///////////////////////
const campoCEP = document.getElementById("Cep");
if (campoCEP) {
  configurarMascaraCEP(campoCEP);
}

const campoCEPCnpj = document.getElementById("CepProfissional");
if (campoCEPCnpj) {
  configurarMascaraCEP(campoCEPCnpj);
}


//////////////////////////////////CPF ou CNPJ//////////////////////////////////////////////
// Função para aplicar a máscara ao valor do CPF ou CNPJ
function aplicarMascaraCpfCnpj(valor) {
  // Remove todos os caracteres não numéricos
  valor = valor.replace(/\D/g, '');

  if (valor.length <= 11) {
    // Aplica a máscara para CPF (XXX.XXX.XXX-XX)
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else if (valor.length <= 14) {
    // Aplica a máscara para CNPJ (XX.XXX.XXX/XXXX-XX)
    valor = valor.replace(/(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1/$2");
    valor = valor.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }

  return valor;
}

// Função para configurar a máscara de CPF ou CNPJ em um campo
function configurarMascaraCpfCnpj(campo) {
  function aplicarMascara() {
    const valorAtual = campo.value;
    const valorFormatado = aplicarMascaraCpfCnpj(valorAtual);

    if (valorAtual !== valorFormatado) {
      campo.value = valorFormatado;
    }
  }

  // Aplica a máscara quando o valor do campo muda e ao perder o foco
  campo.addEventListener("input", aplicarMascara);
  campo.addEventListener("blur", aplicarMascara);

  // Aplica a máscara ao carregar o valor inicial
  aplicarMascara();
}

// Configura a máscara para o campo com ID 'CpfCnpj'
const campoCpfCnpj = document.getElementById("Documento");
if (campoCpfCnpj) {
  configurarMascaraCpfCnpj(CpfCnpj);
}
