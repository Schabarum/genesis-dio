let order = [];
let clickOrder = [];
let score = 0;

// ordem das cores
// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

// sorteador de sequencia para distribuir qual cor é selecionada
let ordemSorteio = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];
    
    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a proxima cor
let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected'); 
    } , number - 250);
    
    setTimeout(() => {
        element.classList.vermelho('selected');
    });
}

// checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () =>{
    for(let i in clickOrder){
        if (clickOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if (clickOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// funcao para o clique do usuario
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0){
        return verde;
    } else if (color == 1) {
        return vermelho;
    } else if (color == 2) {
        return amarelo;
    } else if (color == 3){
        return azul;
    };
}

// funcao para proximo nivel
let nextLevel = () => {
    score++;
    ordemSorteio();
}

// funcao para perder o game
let lose = () => {
    alert(`Pontuação ${score}!\n Você perdeu o jogo!\n Clique em Ok para reiniciar`);
    order = [];
    clickOrder = [];
    
    playGame();
}

let playGame = () => {
    score = 0;

    nextLevel();
}

verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);


playGame();