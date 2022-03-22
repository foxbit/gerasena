let divSenaResultArea = document.getElementById("senaResultArea");



function sorteia() {
   return Math.floor(Math.random() * 60) + 1;
}



function sorteiaNumeros() {
    
    let qtdJogos = document.getElementById("myRange").value;
    let megaSena = [];
    let numero = 1;
    let quantidadeMaximaDeNumeros = 6;

    while(numero <= quantidadeMaximaDeNumeros) {

        let numerosSorteados = sorteia();
        let achou = false;

            for(posicao = 0; posicao < megaSena.length; posicao++) {

                if(megaSena[posicao] == numerosSorteados) {

                    achou = true;
                    break;
                }
            }

            if(achou == false) {

                megaSena.push(numerosSorteados);
                numero++;
            }

        }

    megaSena.sort(function(a, b){return a - b});

    let z = 0;

    while (z < qtdJogos) {
        // Executa 5 vezes, com os valores de passos de 0 a 4.
        for (i = 0; i < quantidadeMaximaDeNumeros; i++) {
          $('<div class="senaResultItem" id="numero"/>').text(megaSena[i]).appendTo(divSenaResultArea);
                 
          }
          z++;
      } 
                
    
    divSenaResultArea.style.display = "block";
    divSenaResultArea.style.display = "flex";
    
}



/*
function limpaResultados() {
    let numeroDiv = document.getElementById("numero");
    numeroDiv.remove();
}
*/