/* Script for our counter APP */

/* let´s bring the HTML elements */
// const counterVisor = document.getElementById('count-el');
// const incrementBtn = document.getElementById('increment-btn');
// // counterVisor.innerText = 6;

// // /* Let´s create the variable that is gonna storage the counter */
// // let ctrStorage = 0;

// // /* we create an eventListener, so when we click on the button, the counter adds one */
// // incrementBtn.addEventListener('click', () => {
// //     /* we need a variable that´s storage the sum of click´s the button have */
// //     let totalPassenger = ctrStorage + incrementBtn
    
// // })
// // incrementBtn()
// // counterVisor.innerText = incrementBtn(totalPassenger)

// let count = 0

// incrementBtn.addEventListener('click', () => {
//     count = count + 1;
//     counterVisor.innerText = count
// })

const counterVisor = document.getElementById('count-el');
const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
const welcomeEl = document.getElementById('welcome-el');
const saveEl = document.getElementById('save-el');
const sumEl = document.getElementById('sum-el');
const totalSum = document.getElementById('total-sum');
const entryEl = document.getElementById('entry-el');
const resetBtn = document.getElementById('reset-el');


let ctrStorage = 0
let saveCount = []
let name = '\Nakio \'s'
let greeting = 'Bienvenido al contador de entradas del '
let sum = 0

welcomeEl.innerText = greeting + name;
welcomeEl.innerText += String.fromCodePoint(0x1F3C8)



incrementBtn.addEventListener('click', () => {
    ctrStorage = ctrStorage + 1;
    counterVisor.innerText = ctrStorage
})

saveBtn.addEventListener('click', () => {
    let saveEntry = ctrStorage + ' - '
    saveCount.push(ctrStorage)
    saveEl.innerText += ' ' + saveEntry // Al usar el += guardamos el texto que tenemos el <p> y se le suma lo nuevo. Podemos usar .textContent y no es necesario poner el espacio por delante.
    ctrStorage = 0
    counterVisor.innerText = 0
})

sumEl.addEventListener('click', () => {
    for(let i=0;i<saveCount.length;i++){
        sum += saveCount[i];
        totalSum.textContent = 'Total ingreados: ' + sum
    }
})

resetBtn.addEventListener('click', () => {
    ctrStorage = 0
    saveCount = []
    saveEntry = 0
    sum = 0
    totalSum.textContent = ''
    saveEl.textContent = 'Entradas Anteriores: '
})