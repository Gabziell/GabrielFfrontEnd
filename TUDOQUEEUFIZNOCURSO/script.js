// Obtém o elemento do canvas e seu contexto 2D
//Essa função (getElementByID) busca algo pelo nome
const canvas = document.getElementById("snakeGame");

// o getContext é como uma ferramenta que nos permite
//escolher como queremos desenhar coisas nessa tela em branco.
const ctx = canvas.getContext("2d");

















// Tamanho do Snake e tamanho da grade do jogo

/*Nesta linha, estamos definindo uma constante
chamada snakeSize com o valor 20. Isso significa
que estamos definindo o tamanho de cada segmento
da cobra em 20 unidades.*/
const snakeSize = 20;

/* Nesta linha, estamos calculando o tamanho da
grade em que a cobra se move. O canvas representa
a área de desenho do jogo, e canvas.width é a
largura dessa área em unidades. 

O tamanho da grade (gridSize) é calculado dividindo
a largura do canvas pelo tamanho de cada segmento da
cobra (snakeSize). Isso determina quantos segmentos
da cobra podem caber na largura do canvas.

O resultado é usado para definir o tamanho da grade
em que a cobra se moverá.
*/

const gridSize = canvas.width / snakeSize;



















// Inicializa a cobra com uma única posição

/*

Esta linha de código está dizendo onde o
Snake vai se posicionar no início do jogo.

É um array contendo um único objeto que
especifica a posição inicial. 

No início do jogo, a cobra está localizada
na coordenada (10, 10) no canvas.

Conforme o jogo progride, a posição dela
será atualizada para simular seu movimento.

*/

let snake = [{ x: 10, y: 10 }];

// Inicializa a posição da comida
let food = { x: 5, y: 5 };











// Velocidade inicial da cobra

/*
Essa variável dx controla o movimento
horizontal da cobra. Quando dx é igual a 1,
a cobra se move para a direita, porque está
indo em direção ao lado positivo do eixo horizontal.
*/
let dx = 1; // Movimento horizontal

/*
Essa variável dy controla o movimento vertical da
cobra. Quando dy é igual a 0, a cobra não se move
verticalmente, porque está parada no eixo vertical.
*/
let dy = 0; // Movimento vertical


// Inicializa a pontuação do jogador
let score = 0;



// Função para desenhar a cobra na tela

/*
A função drawSnake é responsável por desenhar 
a cobra na tela do jogo. Vamos detalhar cada parte dela:

ctx.fillStyle = "#00FF00";: 

Aqui, estamos definindo a cor 
de preenchimento (fillStyle) do contexto 2D (ctx) do canvas. 
O contexto 2D é uma ferramenta que nos permite desenhar coisas 
no canvas. A cor de preenchimento é a cor usada para preencher 
os elementos desenhados. Neste caso, estamos definindo a cor 
como verde (#00FF00) para representar a cobra.

snake.forEach(segment => { ... });: 
Aqui, estamos usando o método forEach para percorrer todos os 
segmentos da cobra. O snake é um array que contém os segmentos 
da cobra. O método forEach é usado para iterar por todos os 
elementos do array e executar uma função para cada elemento.

ctx.fillRect(segment.x * snakeSize, segment.y * snakeSize, snakeSize, snakeSize);:
Dentro do loop forEach, estamos usando o método fillRect do contexto 2D (
    ctx) para desenhar um retângulo para representar cada segmento da cobra.

segment.x * snakeSize e segment.y * snakeSize calculam a posição em que
o retângulo do segmento deve ser desenhado no canvas. Multiplicamos a
coordenada x e y do segmento pelo tamanho do segmento (snakeSize) para
obter as coordenadas corretas no canvas.

snakeSize é usado como a largura e a altura do retângulo,
o que determina o tamanho de cada segmento da cobra.

Portanto, essa função percorre cada segmento da cobra
e desenha um retângulo verde (a cor da cobra) para representar
cada segmento no canvas. O resultado é uma representação visual
da cobra no jogo, onde cada segmento é desenhado na posição
correta com a cor verde.
*/
function drawSnake() {
    ctx.fillStyle = "#800080"; // Cor da cobra (verde)
    snake.forEach(segment => {
        ctx.fillRect(segment.x * snakeSize, segment.y * snakeSize, snakeSize, snakeSize);
    });
}



// Função para desenhar a comida na tela

/*
ctx.fillStyle = "#FF0000";:
Esta linha define a cor de preenchimento
(fillStyle) do contexto 2D (ctx) do canvas.
Neste caso, a cor está definida como vermelha
(#FF0000) para representar a comida.

ctx.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);:
Esta linha usa o método fillRect do contexto 2D (ctx)
para desenhar um retângulo vermelho que representa a comida.

food.x * snakeSize e food.y * snakeSize calculam a posição em que o
retângulo da comida deve ser desenhado no canvas

Isso é feito multiplicando as coordenadas x e y da comida pelo
tamanho do segmento da cobra (snakeSize) para obter as coordenadas
corretas no canvas.

snakeSize é usado como a largura e altura do retângulo,
o que determina o tamanho da comida no jogo. Como resultado,
a comida é desenhada como um quadrado vermelho, que é a
representação visual da comida no canvas.

Portanto, esta função é responsável por desenhar 
a comida na posição especificada pelo objeto food
com a cor vermelha no canvas do jogo. À medida que a
comida é consumida pela cobra, sua posição pode ser 
tualizada para uma nova posição aleatória, e esta função
será chamada novamente para redesenhar a comida na nova posição.
*/

function drawFood() {
    ctx.fillStyle = "#FF0000"; // Cor da comida (vermelho)
    ctx.fillRect(food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize);
}



// Função para mover a cobra

/*
Esta função moveSnake é responsável
por mover a cobra no jogo, além de
realizar algumas verificações importantes.

const head = { x: snake[0].x + dx, y: snake[0].y + dy };:
Esta linha cria um novo objeto chamado head que representa
a nova posição da cabeça da cobra após o movimento.
Ele calcula a nova posição da cabeça somando a coordenada x
da primeira parte da cobra (a cabeça atual) com dx (a mudança horizontal)
e a coordenada y da cabeça atual com dy (a mudança vertical).

snake.unshift(head);:
Esta linha adiciona o novo objeto head ao início do array snake,
o que efetivamente move a cobra para uma nova posição.
A cabeça agora está na nova posição, e o restante da cobra
(os segmentos seguintes) irá seguir.

if (head.x === food.x && head.y === food.y) { ... }:
Aqui, estamos verificando se a cabeça da cobra (head)
está na mesma posição que a comida (food). Se a cabeça
da cobra estiver na posição da comida, significa que a
cobra comeu a comida.

score++;:
Se a cobra comeu a comida, aumentamos a pontuação do jogador em 1 ponto.

document.getElementById("score").textContent = "Pontuação: " + score;:
Atualizamos o conteúdo de um elemento HTML com o ID "score" para mostrar
a nova pontuação do jogador.

generateFood();:
Chamamos a função generateFood para gerar uma nova posição para
a comida, fazendo com que ela apareça em um lugar diferente
no próximo frame do jogo.

else { snake.pop(); }:
Se a cabeça do Snake não estiver na mesma posição que a
comida (ou seja, a cobra não comeu), então removemos a última
parte da cobra (snake.pop()) para que ela pareça estar se movendo.

Em resumo, esta função move a cobra para uma nova posição
com base nas mudanças dx e dy, verifica se a cobra comeu
a comida (aumentando a pontuação e gerando uma nova comida,
    se necessário), e ajusta o tamanho da cobra ao remover
    o último segmento se a comida não foi consumida.

*/

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); // Adiciona a nova posição da cabeça no início da cobra

    if (head.x === food.x && head.y === food.y) {
        score++; // Aumenta a pontuação do jogador
        document.getElementById("score").textContent = "Pontuação: " + score;
        generateFood(); // Gera uma nova posição para a comida
    } else {
        snake.pop(); // Remove a última parte da cobra se não comer a comida
    }
}

// Função para gerar uma nova posição para a comida

/*

Esta função generateFood é responsável por
gerar uma nova posição aleatória para a comida no jogo.

food = { ... };: 
Esta linha cria um novo objeto food
que representa a posição da comida. Esse objeto é
atribuído à variável food, substituindo a posição
anterior da comida. Em outras palavras, isso move a
comida para uma nova posição.

{ ... }: 
Dentro das chaves, estamos definindo duas
propriedades para o objeto food:

x: Math.floor(Math.random() * gridSize):
Isso define a coordenada horizontal (x) da
comida como um número aleatório dentro dos
limites da grade do jogo. Math.random() gera
um número decimal aleatório entre 0 (inclusive)
e 1 (exclusivo), e ao multiplicá-lo por gridSize,
obtemos um número aleatório dentro das dimensões
da grade do jogo. Math.floor é usado para
arredondar o número para baixo, tornando-o um número inteiro.

y: Math.floor(Math.random() * gridSize):
Isso define a coordenada vertical (y) da comida da
mesma forma que a coordenada horizontal, gerando um
número aleatório dentro das dimensões da grade.

Portanto, a função generateFood
gera uma nova posição aleatória para a comida,
dentro das dimensões da grade do jogo. Isso faz
com que a comida apareça em um lugar diferente
na tela sempre que a função for chamada, tornando
o jogo mais desafiador à medida que a comida se move aleatoriamente.
*/



function generateFood() {
    food = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
    };
}


// Função para verificar colisões

/*
Essa função checkCollision é responsável
por verificar se ocorreram colisões no jogo,
ou seja, se a cobra colidiu com as bordas do
canvas ou com o próprio corpo. 

1)
const head = snake[0];:
Esta linha cria uma variável head que armazena
a primeira parte da cobra, que é a cabeça.
O array snake representa a cobra, e a cabeça
está na posição snake[0].

2)
if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) { ... }:
Esta parte verifica se a cabeça da cobra atingiu a borda do canvas.
Ela faz quatro verificações:

head.x < 0: Verifica se a cabeça está à esquerda do canvas.
head.x >= gridSize: Verifica se a cabeça está à direita do canvas.
head.y < 0: Verifica se a cabeça está acima do canvas.
head.y >= gridSize: Verifica se a cabeça está abaixo do canvas.
Se qualquer uma dessas condições for verdadeira, significa que a
cabeça da cobra atingiu a borda do canvas, o que resulta em um Game Over.
A função então encerra o loop do jogo com clearInterval
e mostra uma mensagem de Game Over usando alert.

3)
O código dentro do for verifica se a cabeça do Snake
colidiu com o próprio corpo.
O loop começa a partir do índice 1, porque não precisamos
verificar se a cabeça colidiu com ela mesma. Em vez disso
 verificamos se a cabeça colidiu com qualquer outro segmento
 da cobra. Se a colisão for detectada (ou seja, se head.x
    for igual a snake[i].x e head.y for igual a snake[i].y),
    o jogo é encerrado com clearInterval e uma mensagem de
    Game Over é exibida.

Essa função é essencial para manter a integridade do jogo,
garantindo que ele termine quando a cobra colide com as
bordas do canvas ou com seu próprio corpo.

*/


function checkCollision() {
    const head = snake[0];

    // Verifica se a cabeça da cobra atingiu a borda do canvas
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        clearInterval(gameLoop); // Encerra o loop do jogo
        alert("Game Over! Sua pontuação: " + score); // Mostra uma mensagem de Game Over
    }

    // Verifica se a cabeça da cobra colidiu com o próprio corpo
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            clearInterval(gameLoop); // Encerra o loop do jogo
            alert("Game Over! Sua pontuação: " + score); // Mostra uma mensagem de Game Over
        }
    }
}
/*
Essa função chama todas as funções, o tempo todo,
garantindo que o jogo continue rodando.
*/
// Função principal do jogo que é executada periodicamente
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    drawSnake(); // Desenha a cobra
    drawFood(); // Desenha a comida
    moveSnake(); // Move a cobra
    checkCollision(); // Verifica colisões
}











// Adiciona um ouvinte de eventos para capturar as teclas pressionadas pelo jogador
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (dy !== 1) {
                dx = 0;
                dy = -1;
            }
            break;
        case "ArrowDown":
            if (dy !== -1) {
                dx = 0;
                dy = 1;
            }
            break;
        case "ArrowLeft":
            if (dx !== 1) {
                dx = -1;
                dy = 0;
            }
            break;
        case "ArrowRight":
            if (dx !== -1) {
                dx = 1;
                dy = 0;
            }
            break;
    }
});

generateFood(); // Inicializa a posição inicial da comida
setInterval(gameLoop, 100); // Inicia o loop do jogo a cada 100 milissegundos



