if (model.OrgaoEmissor == 1 || model.OrgaoEmissor == 4){//DIVISÃO DE CONTROLE E FISCALIZAÇÃO ou Fiscalização Fazendaria (PGRS)
    model.cdSetorDestino = 350;
    model.cdSetorAbertura = 26;
    model.cdOrgao = 2;
} else if (model.OrgaoEmissor == 2){//SETOR DE FISCALIZAÇÃO AMBIENTAL  
    model.cdSetorDestino = 502;
    model.cdSetorAbertura = 26;
    model.cdOrgao = 2;
} else if (model.OrgaoEmissor == 3){//Pelotão Ambiental 
    model.cdSetorDestino = 816;
    model.cdSetorAbertura = 26;
    model.cdOrgao = 2;
}