const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); //FOR DRAWING
canvas.height = canvas.width = 600;
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake;
let totalTime = 0;

(function setup() {
  snake = new Snake();
  food = new Food();
  food.randomLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    food.draw();
    snake.update();
    snake.draw();

    //MOVE FOOD TO RANDOM LOCATION AFTER SNAKE EATS IT
    if (snake.eat(food)) {
      food.randomLocation();
    }
    snake.checkCollision();

    document.querySelector(".scoreBoard").innerText = snake.total;
  }, 250);
})();

//TIME IN SECONDS//
setInterval(timer, 1000);
function timer() {
  ++totalTime;
  document.querySelector(".time").innerText = seconds(totalTime % 60);
}
function seconds(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//MOBILE//
function up() {
  snake.xSpeed = 0;
  snake.ySpeed = -scale * 1;
}

function down() {
  snake.xSpeed = 0;
  snake.ySpeed = scale * 1;
}

function left() {
  snake.xSpeed = -scale * 1;
  snake.ySpeed = 0;
}

function right() {
  snake.xSpeed = scale * 1;
  snake.ySpeed = 0;
}

//MOVE SNAKE
window.addEventListener("keydown", (e) => {
  const direction = e.code.replace("Arrow", "");
  snake.changeDirection(direction);
});
