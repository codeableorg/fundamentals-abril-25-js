const INITIAL_COUNTER = 20;
const counterElement = document.querySelector('#counter');
const counterContainer = document.querySelector('.counterContainer');
counterElement.textContent = INITIAL_COUNTER;


function startTimer() {
    const timer = setInterval(() => {
        counterElement.textContent = parseInt(counterElement.textContent) - 1;

        if (parseInt(counterElement.textContent) <= 0) {
            clearInterval(timer);
            counterContainer.innerHTML = '<h1>💥 BOOM! 💥</h1>';
        }
    }, 1000);

    pauseButton.addEventListener('click', () => {
        clearInterval(timer);
    });

    restartButton.addEventListener('click', () => {
        counterElement.textContent = INITIAL_COUNTER;
        startTimer();
    })

}
const pauseButton = document.querySelector('#pause');
const restartButton = document.querySelector('#restart');

startTimer();
