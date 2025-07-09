const buttonContainer = document.querySelector('#buttonsContainer')
const counter = document.querySelector('#counter')
const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')

console.log(buttonContainer)
console.log(counter)
console.log(incrementButton)
console.log(decrementButton)

function increment() {
    counter.textContent++
}

function decrement() {
    counter.textContent--
}

function counterHandler(event) {
    if (event.target === incrementButton) {
        console.log('increment button clicked')
        increment()
    } else if (event.target === decrementButton) {
        console.log('decrement button clicked')
        decrement()
    } else {
        console.log('other event')
    }
}

buttonContainer.addEventListener('click', counterHandler)
