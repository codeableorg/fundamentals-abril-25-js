const buttonContainer = document.querySelector("#buttonsContainer");
const counter = document.querySelector("#counter");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");

console.log(buttonContainer);
console.log(counter);
console.log(incrementButton);
console.log(decrementButton);

console.log("contenido counter");
console.log(counter.innerHTML);
console.log(counter.textContent);


function increment() {
  counter.textContent++
}


function decrement() {
    counter.textContent--
}

incrementButton.addEventListener('click', increment)
decrementButton.addEventListener('click', decrement)
