function generateRandomNumbers(minNumber, maxNumber, numbersCount) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    numbersCount = numbersCount > 0 ? numbersCount : 1;
    const randomNumbers = [];


    for (let i = 0; i < numbersCount; i++) {
        let randomNumber = null;
        let numberAlreadyGenerated = null;

        do {
            randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            numberAlreadyGenerated = randomNumbers.indexOf(randomNumber) >= 0;
        } while (numberAlreadyGenerated);
            
        randomNumbers.push(randomNumber);
    }

    return randomNumbers.sort(function(a, b) { return a - b; });
}

function gerarJogos() {
    let qtdJogos = document.getElementById("myRange").value;
    let qtdDezenasPorJogo = 6;
    let jogos = [];
    
    for (let i = 0; i < qtdJogos; i++) {
        jogos.push(generateRandomNumbers(0, 60, qtdDezenasPorJogo));
    }

    exibirJogos(jogos);    
}

function exibirJogos(jogos) {
    let divSenaResultArea = document.getElementById("senaResultArea");
    divSenaResultArea.innerHTML = '';

    for (let jogo of jogos) {
        for (let dezena of jogo) {
            $('<div class="senaResultItem" id="numero"/>').text(dezena).appendTo(divSenaResultArea);
        }
    }

    divSenaResultArea.style.display = "flex";
}