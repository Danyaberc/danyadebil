const pesA = document.querySelector('.pespatron1')
// const pesB = document.querySelector('.pespatron2')
const container = document.querySelector('.container')

let step = 50;

let pesA_top = 0;
let pesA_left = 0;
pesA.style.top = `${pesA_top}px`;
pesA.style.left = `${pesA_left}px`;


// let pesB_top = 0;
// let pesB_left = 0;
// pesB.style.top = `${pesB_top}px`;
// pesB.style.left = `${pesB_left}px`;

let Top, Left
let x, y

const renderControl = (ev) => {

   let newPesLeft = ev.pageX - pesA.getBoundingClientRect().left;
   let newPesTop = ev.pageY - pesA.getBoundingClientRect().top
   x = ev.pageX;
   y = ev.pageY;

   console.log('x:', x, 'y:', y)

   let Top = parseInt(pesA.style.top);
   let Left = parseint(pesA.style.left);

   console.log('A:', A1, 'A2:', A2)

   if ((newPesLeft < 50) && (newPesTop < 50)) {
      x = A1 - step;
      y = A2 - step;
   }
   if ((newPesLeft > 50) && (newPesTop > 50)) {
      x = A1 + step;
      y = A2 + step;
   }
   if ((newPesLeft < 50) && (newPesTop > 50)) {
      x = A1 + step;
      y = A2 - step;
   }
   if ((newPesLeft > 50) && (newPesTop < 50)) {
      x = A1 - step;
      y = A2 - step;
   }

}
renderControl()