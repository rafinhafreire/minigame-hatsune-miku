
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const cuble = document.querySelector('.cuble');
const gameOver = document.querySelector('.gameOver');
const homePage = document.querySelector('.home-page');
const score = document.querySelector('.score');
const record = document.querySelector('.record');

let cont= 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

pipe.style.display = 'none'

function initGame(){

    pipe.style.display = 'block'
    homePage.style.display = 'none'
    cuble.style.display = 'block'

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const cublePosition = cuble.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
           
        if (cublePosition <= 200 && marioPosition < 80 && cublePosition > 0) {          
            mario.src = "./img/old-shiteyanyo-gif-by-randompe-unscreen.gif"
            cuble.style.display = "none"
            mario.style.width = '350px'
            
        }
    
        if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`
    
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
            mario.src = "./img/kindpng_1726331_SAD.png"
            mario.style.width = '150px'
            mario.style.marginLeft = '20px'
            btn.style.display = 'block'
            gameOver.style.display = 'block'
            btn1.style.display = 'block'
            btn2.style.display = 'block'
            score.style.display = "none"
            record.innerHTML = cont
    
            clearInterval(loop)
        }

        cont++
        score.innerHTML = cont
    }, 10)
}

document.addEventListener('keydown', jump);
