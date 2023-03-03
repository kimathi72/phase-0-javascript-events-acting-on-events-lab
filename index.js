// Your code here
const dodger = document.getElementById("dodger");
const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);
function beforeEach(){
  leftNumbers = undefined;
  left = 0;
}
beforeEach();

function moveDodgerLeft() {
 

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}
function moveDodgerRight() {
 

  if (left < 360) {
    dodger.style.left = `${left + 5}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});