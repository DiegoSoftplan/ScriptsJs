var nomeApi = "MARIA APARECIDA DA SILVA SAURO"
var nomeDig = "MARIA AP DA SILVA"

function semelhanca(nomeApi, nomeApi) {
    var arr1 = nomeApi.split(" ");
    var arr2 = nomeApi.split(" ");
    
    var arrMaior = [];
    var arrMenor = [];
    
    if(arr1.length > arr2.length) {
        arrMaior = arr1;
        arrMenor = arr2;
    } else {
        arrMaior = arr2;
        arrMenor = arr1;
    }
        
    var palavrasIguais = 0;
    
    for(var i = 0; i < arrMaior.length; i++) {
        if(arrMenor.includes(arrMaior[i]))  
            palavrasIguais++;
    }
    
    return  palavrasIguais / arrMaior.length * 100 ;
}

console.log(semelhanca(nomeApi, nomeDig));