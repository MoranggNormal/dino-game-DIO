function sonJump() {
const jump = document.querySelector('.jump'); 
jump.play();
}

const background = document.querySelector('.background');
const dino = document.querySelector('.dino');
const manual = document.querySelector('.instrucao');

var placar = document.querySelector('.score');

function pontuou() {
    placar.innerHTML = 'SCORE: ' + score;
}

manual.innerHTML = 'Press the space key'

let isjumping = false;
let position = 0;
var score = 0;

function handUp(event){
    if(event.keyCode === 32){
        if (!isjumping){
            manual.remove();
            sonJump()
            jump()
        }
    }
}

function jump() {
    
    isjumping = true;
    
    let upInterval = setInterval(() => {
        if(position >= 190){
            clearInterval(upInterval);
            
            //descendo
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isjumping = false;
                }else{
                    position -= 10;//position + position
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        }else{
            //subindo
            position += 20;//position + position
            dino.style.bottom = position + 'px';
        }
    }, 20)
}

//Criando cactus
function createcactus(){  
    const cactus = document.createElement('div')
    let cactusPosition = 1400;
    
    cactus.classList.add('cactus');
    background.appendChild(cactus);
    
    //Posição
    let leftInterval = setInterval(() => {
        
        if (cactusPosition <-60){
            score = score + 1
            pontuou()
            clearInterval(leftInterval);
            background.removeChild(cactus)
        }if(cactusPosition > 60 && cactusPosition < 100 && position < 100){
            clearInterval(leftInterval);
            document.body.innerHTML ='<h1 class="game-over">Game Over</h1>' + '<h2 class="over-score">Your Score: ' + score + '</h2>';
        }else{
            cactusPosition -= 12;
            cactus.style.left = cactusPosition + 'px'; 
            }
            if(score >= 11){
                cactusPosition -= 3;
            }
            if(score > 20){
                cactusPosition -= 2;
            }
            if(score >= 30){
                cactusPosition -= 3;
            }
            if(score > 40){
                cactusPosition -= 2;
            }
            if(score > 50){
                cactusPosition -= 3;
            }
            if(score > 60){
                cactusPosition -= 2;
            }
            if(score > 70){
                cactusPosition -= 3;
            }
            if(score > 80){
                cactusPosition -= 2;
            }
            if(score > 90){
                cactusPosition -= 3;
            }
            if(score > 100){
                cactusPosition -= 5;
            }
        },20);
        setTimeout(() => {
    createcactus();
}, 2000);
}


function createbird(){  

    let birdPosition = 1400;       
        
    const bird = document.createElement('div')
        
    bird.classList.add('bird');
    background.appendChild(bird);

    //Posição
    let leftInterval = setInterval(() => {
        if (birdPosition < -47){
            score =  score + 1
            pontuou()
            clearInterval(leftInterval);
            background.removeChild(bird)
        }else if(birdPosition > 60 && birdPosition < 100 && position < 100){
            clearInterval(leftInterval);
            document.body.innerHTML ='<h1 class="game-over">Game Over</h1>' + '<h2 class="over-score">Your Score: ' + score + '</h2>';
        }else{
            birdPosition -= 10;
            bird.style.left = birdPosition + 'px';             
        }
        if(score >= 11){
            birdPosition -= 3;
        }
        if(score > 20){
            birdPosition -= 2;
        }
        if(score >= 30){
            birdPosition -= 3;
        }
        if(score > 40){
            birdPosition -= 2;
        }
        if(score > 50){
            birdPosition -= 3;
        }
        if(score > 60){
            birdPosition -= 2;
        }
        if(score > 70){
            birdPosition -= 3;
        }
        if(score > 80){
            birdPosition -= 2;
        }
        if(score > 90){
            birdPosition -= 3;
        }
        if(score > 100){
            birdPosition -= 5;
        }
    },18);
    setTimeout(() => {
        createbird()
    }, 4000);
}

function createDinoRex(){  

    let dinoRexPosition = 1400;       
        
    const dinoRex = document.createElement('div')
        
    dinoRex.classList.add('dinoRex');
    background.appendChild(dinoRex);

    //Posição
    let leftInterval = setInterval(() => {
        if (dinoRexPosition < -63){
            score =  score + 1
            pontuou()
            clearInterval(leftInterval);
            background.removeChild(dinoRex)
        }else if(dinoRexPosition > 60 && dinoRexPosition < 100 && position < 100){
            clearInterval(leftInterval);
            document.body.innerHTML ='<h1 class="game-over">Game Over</h1>' + '<h2 class="over-score">Your Score: ' + score +'</h2>' ;
        }else{
            dinoRexPosition -= 9;
            dinoRex.style.left = dinoRexPosition + 'px';             
        }
        if(score >= 11){
            dinoRexPosition -= 3;
        }
        if(score > 20){
            dinoRexPosition -= 2;
        }
        if(score >= 30){
            dinoRexPosition -= 3;
        }
        if(score > 40){
            dinoRexPosition -= 2;
        }
        if(score > 50){
            dinoRePosition -= 3;
        }
        if(score > 60){
            dinoRexPosition -= 2;
        }
        if(score > 70){
            dinoRexPosition -= 3;
        }
        if(score > 80){
            dinoRexPosition -= 2;
        }
        if(score > 90){
            dinoRexPosition -= 3;
        }
        if(score > 100){
            dinoRexPosition -= 5;
        }
    },18);
    setTimeout(() => {
        createDinoRex()
    }, 8000);
}

setTimeout(() => {
createbird()
}, 8000)

setTimeout(() => {
createDinoRex()
}, 13800)

pontuou()
setTimeout(() => {
createcactus()
}, 5000)

document.addEventListener('keyup', handUp);