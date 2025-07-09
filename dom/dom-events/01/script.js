/*
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado!');

    const mouseOverButton = document.querySelector('#mouse-over');
    mouseOverButton.addEventListener('mouseover', () => {
        console.log('se paso el mouse por encima');
    });
    const clickButton = document.querySelector('#click');
    clickButton.addEventListener('click', () => {
        console.log('se hizo click');
    });
});
*/

/*
const button = document.querySelector("#click2");
button.onclick = function () {
  console.log("se hizo click");
};
// declaracion de handler
button.onclick = function () {
  console.log("se hizo otro click");
};
*/

// utilizando event handler
// const button1 = document.querySelector("#click");
// console.log(`este es el primer boton:`, button1);

// button1.addEventListener("click", (event) => {
//   console.log("se hizo click");
//   console.log(event);
// });
// button1.addEventListener("click", () => {
//   console.log("se hizo click tambien");
// });

// utilizando event delegation
const container = document.querySelector('.container')
container.addEventListener('click', (event) => {
  console.log('se hizo click en un boton')
  console.log(event.target)
})