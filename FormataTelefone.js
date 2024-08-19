if (model.TelefoneOritandor.length == 11) {
      model.TelefoneOritandor = model.TelefoneOritandor.replace(/(\d{2})(\d{5})(\d{4})/g, "($1)$2-$3");
    }
    if (model.TelefoneOritandor.length == 10) {
      model.TelefoneOritandor = model.TelefoneOritandor.replace(/(\d{2})(\d{4})(\d{4})/g, "($1)$2-$3");
    }