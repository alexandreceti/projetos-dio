console.log("olha aqui.")
var incrementWapper = document.getElementById('increment');
var decrementWapper = document.getElementById('decrement');
var currentNumberWapper = document.getElementById("currentNumber");
console.log(currentNumberWapper)
console.log(incrementWapper)
console.log(decrementWapper)

var currentNumber = 0;
// function increment() {
//   currentNumber = currentNumber + 1;
//   currentNumberWapper.innerHTML = currentNumber;
//   console.log("incre", currentNumber)
// }


incrementWapper.addEventListener('click', () => {
  currentNumber = currentNumber + 1;
  currentNumberWapper.innerHTML = currentNumber;
  console.log("incre event Lister", currentNumber)
  cond()
})

// function decrement() {
//   currentNumber = currentNumber - 1;
//   currentNumberWapper.innerHTML = currentNumber;
//   console.log("dec", currentNumber);
// }

decrementWapper.addEventListener('click', () => {
  currentNumber = currentNumber - 1;
  currentNumberWapper.innerHTML = currentNumber;
  console.log("dec event Lister", currentNumber)
  cond()
})


function cond() {
  if (currentNumber < -9) {
    decrementWapper.disabled = true;
  } else {
    decrementWapper.disabled = false;
  }
  if (currentNumber > 9) {
    incrementWapper.disabled = true;
  } else {
    incrementWapper.disabled = false;
  }
  // color condition
  if (currentNumber < 0) {
    currentNumberWapper.style.color = "red";
  } else {
    currentNumberWapper.style.color = "green";
  }

}
