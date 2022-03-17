let divSenaResultArea = document.getElementById("SenaResultArea")

function mostrarSena () {
    divSenaResultArea.style.display = "block";
}


let button = document.querySelector("button");
        button.onclick = sorteiaNumeros;

        function sorteia() {

            return Math.floor(Math.random() * 60) + 1;

        }

        function sorteiaNumeros() {

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
            alert("Os números da sorte são: " + megaSena);
        }
        

/*
let generateButton = document.getElementById("generateButton");
let gameNumbersRange = document.getElementById("gameNumbersRange");


function generateRandomNumbers(min, max, count) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumbers = [];

    for (let i = 0; i < count; i++) {

        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            numberAlreadyGenerated = randomNumbers.indexOf(randomNumber) >= 0;
        } while (numberAlreadyGenerated);
            
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;

    console.log(randomNumbers)
}
*/