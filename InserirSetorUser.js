if(model.aprovaInsercao == 1){
  for(i=0; i<model.TbInsereSetor.length; i++){
  
      let url = location.origin +'/solarbpm-integracao/usuario/inserir-setor';
      
      let request = new XMLHttpRequest();
      
      let body = {
          "campos": [
            "UNIDADES"
          ],
          "setoresUsuarios": [
            {
              "cdUsuario": model.TbInsereSetor[i]["model"].cdUsuario,
              "unidadePadrao": {
                "sgOrgao": model.TbInsereSetor[i]["model"].sgOrgaoPadrao,
                "sgUnidade": model.TbInsereSetor[i]["model"].sgUnidadePadrao
              },
              "unidades": model.TbInsereSetor[i]["model"].unidades
            }
          ]
        }
      console.log(body);
           request.open("POST", url, true); request.setRequestHeader("Content-type", "application/json");
           request.send(JSON.stringify(body));
          request.onloadend = function ()
      
          {
      
               if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                  console.log('Request Status: ', request.status);
                  alert("A inserção do(s) Setor(es) no Usuário foi realizado com sucesso!"); }
      
              if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
      
                  console.log('Request Status: ', request.status);
      
                  alert("Falha ao realizar a inserção do(s) Setor(es) no Usuário. Revise os dados e tente novamente."); } }
      
      }
    }