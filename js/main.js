const buttonsContainer = document.querySelector('.js-buttons-container');
let buttonsClicked = 0;
let clicksLeft = numButtons;

let buttonEvent = (event) => {
    if(buttonsClicked==0)
    {
        startTimer();
    }
    
    if(buttonsClicked != numButtons)
    {
        let buttonPressed = event.target.value;
        if(buttonPressed == buttonsClicked+1)
        {
            clickCorrect(event);
            if(buttonsClicked == numButtons)
            {
                let reiniciar = confirm("Has terminado el juego. ¿Quieres volver a jugar?");
    
                if (reiniciar) 
                {
                    location.reload();
                }
                else
                {
                    clearInterval(x);
                } 
            }
        }
        else
        {
            clickIncorrect(event)
        }
    }
}

initializeScore();
createAllButtons();

function createAllButtons()
{
    const arrNums = generateButtonNumbers(numButtons);

    for (let i = 0; i < numButtons; i++) {
       createButton(arrNums[i])
    }
}

function createButton(value)
{
    const button = document.createElement('button');
    button.classList.add('js-num-button', 'num-button');
    button.value = value;
    button.textContent = value;
    button.addEventListener('click', buttonEvent)
    buttonsContainer.appendChild(button);
}

function generateButtonNumbers(numButtons)
{
    const arr = [];
    while (arr.length < numButtons) {
        const r = Math.floor(Math.random() * numButtons) + 1;
        if (arr.indexOf(r) === -1) {
            arr.push(r);
        }
    }
    return arr;
}

function clickCorrect(event)
{
    buttonsClicked++;
    document.querySelector('.js-score').innerHTML = `${buttonsClicked} / ${numButtons}`;
    event.target.classList.add("num-button-correct");
    clicksLeft--;
    document.querySelector('.js-remaining-score').innerHTML = clicksLeft;
}

function clickIncorrect()
{
    alert('Sorry you lost');
    location.reload();
}

function initializeScore()
{
    document.querySelector('.js-remaining-score').innerHTML = clicksLeft;
    document.querySelector('.js-score').innerHTML = 0;
}

