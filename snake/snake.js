function Snake() {
  this.x = 300;
  this.y = 300;
  this.xSpeed = scale * 1; //SPEED ON X SCALE
  this.ySpeed = 0; //SPEED ON Y SCALE
  this.total = 0;
  this.tail = [];
  this.highScoreBoard = document.querySelector(".highScore");
  this.highScore = 0;

  //DRAWS SNAKE//
  this.draw = function () {
    ctx.fillStyle = "#575a4b";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  //MOVES SNAKE//
  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    //ADDS FOOD TO SNAKE TAIL//
    this.tail[this.total - 1] = { x: this.x, y: this.y };
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    //ALLOWS SNAKE TO MOVE THROUGH BORDERS//
    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
  };

  //KEYBOARD FUNCTION//
  this.changeDirection = function (direction) {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case "Left":
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case "Right":
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  };

  //INCREASE SNAKE LENGTH AFTER EATING//
  this.eat = function (food) {
    if (this.x === food.x && this.y === food.y) {
      this.total++;
      //UPDATING HIGHSCORE//
      if (this.total > this.highScore) {
        this.highScore = this.total;
        this.highScoreBoard.innerText = "" + this.highScore;
      }
      return true;
    }
    return false;
  };

  //RESET TIME, SCORE AND SNAKE LENGTH WHEN SNAKE EATS ITSELF//
  this.checkCollision = function () {
    if (this.tail.length < 5) return false;
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
        totalTime = 0;
      }
    }
  };
}
