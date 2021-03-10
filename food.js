function Food() {
  this.x;
  this.y;

  this.randomLocation = function () {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  };

  //CREATE FOOD//
  this.draw = function () {
    ctx.fillStyle = "#f15156";
    ctx.fillRect(this.x, this.y, scale, scale);
  };
}
