let x;
let countDownDate;

function startTimer()
{
    countDownDate = new Date();

    countDownDate.setMinutes(countDownDate.getMinutes() + minutesTimer);
    
    x= setInterval(timer,1000);
}
function timer ()
{
    let now = new Date();
    let distance = countDownDate - now;
      
    // Time calculation for minutes and seconds  
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      
    document.querySelector(".js-timer").innerHTML =  minutes + "m " + seconds + "s ";
      
      
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".js-timer").innerHTML = "TIME OUT";
        alert('The game has finished, you lose');
        location.reload();
    }
}

