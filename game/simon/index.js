'use strict';

var title = document.getElementsByTagName('h1')[0];
var btn = document.getElementsByTagName('button');
var gameLevel = [];
var highScore = 0;
var count = 0;

window.addEventListener('touchstart', function () {
    if (gameLevel.length === 0) {
        generateRandom(gameLevel);
        title.textContent = 'Level 1';

        btnNext(gameLevel[0])
    }
    // console.log(...gameLevel)
})

window.addEventListener('keydown', function () {
    if (gameLevel.length === 0) {
        generateRandom(gameLevel);
        title.textContent = 'Level 1';

        btnNext(gameLevel[0])
    }
    // console.log(...gameLevel)
})

for (let index = 0; index < btn.length; index++) {
    let btnEl = btn[index];
    btnEl.addEventListener('click', function () {

        let btnVal = btnEl.getAttribute('val');

        if (gameLevel[count] != btnVal) {
            if (highScore < gameLevel.length) highScore = gameLevel.length;
            let highScoreElement = document.getElementsByTagName('h3')[0];
            highScoreElement.innerText = `High Score : ${highScore}`;
            resetGame();
            alert('You Lose');
            return true;
        }

        count++;

        if (count === gameLevel.length) {
            generateRandom(gameLevel);
            setTimeout(function(){
                btnNext(gameLevel[gameLevel.length - 1])
            }, 400)
            count = 0;
            // console.log(...gameLevel);
        }
        // console.log(count);

        title.textContent = `Level ${gameLevel.length}`
    })

    btnEl.addEventListener('touchstart', function(){
        btnEl.classList.add('click');
    })
    
    btnEl.addEventListener('touchend', function(){
        btnEl.classList.remove('click');
    })

    btnEl.addEventListener('mousedown', function(){
        btnEl.classList.add('click');
    })
    
    btnEl.addEventListener('mouseup', function(){
        btnEl.classList.remove('click');
    })
}

function generateRandom(gameLevel = []) {
    let rand = Math.floor(Math.random() * 4) + 1;
    return gameLevel.push(rand);
}

function resetGame() {
    title.textContent = 'PRESS ANY KEY TO PLAY';
    count = 0;
    gameLevel = [];
}

function btnNext(val) {
    let btnNext = document.querySelector('[val="' + val + '"]');

    btnNext.classList.add("blink");
    setTimeout(function () {
        btnNext.classList.remove('blink')
    }, 200)
}