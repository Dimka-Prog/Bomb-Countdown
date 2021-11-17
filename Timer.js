document.addEventListener('DOMContentLoaded', function () {
    const EndTimer = new Date(2021, 11);
    let TimerId = null;
    let Remaining_Time;

    function countdownTimer() {
        Remaining_Time = EndTimer - new Date();

        const hours = Remaining_Time > 0 ? Math.floor(Remaining_Time / 1000 / 60 / 60) % 24 : 0;
        const minutes = Remaining_Time > 0 ? Math.floor(Remaining_Time / 1000 / 60) % 60 : 0;
        const seconds = Remaining_Time > 0 ? Math.floor(Remaining_Time / 1000) % 60 : 0;

        if (hours === 0 & minutes === 0 && seconds === 0) {
            clearInterval(TimerId);
            alert("Время вышло");
        }

        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const $hours = document.querySelector('.Hours');
    const $minutes = document.querySelector('.Minutes');
    const $seconds = document.querySelector('.Seconds');

    let promise = new Promise((resolve) => {
        setTimeout(() =>{
            countdownTimer();
            resolve();
        }, 1000)
    });

    promise.then(() =>{
        TimerId = setInterval(countdownTimer, 1000);
    })
});