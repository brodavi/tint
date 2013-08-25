Crafty.c('Door', {
  init: function () {
    this.requires('2D, Canvas, Color, Collision');
    this.attr({w: 50, h: 50});
    this.color('rgb(72,58,32)');
    this.onHit('Player', this.open);
  },
  setOrigin: function (x, y) {

    this.x = x;
    this.y = y;

    const DOORWIDTH = 100;
    const DOORHEIGHT = 15;

    this.left = Crafty.e('2D, Canvas, Color, Collision, Tween, Solid')
      .color('rgb(17,185,25)')
      .attr({x: this.x - DOORWIDTH, y: this.y, w: DOORWIDTH, h: DOORHEIGHT});

    this.right = Crafty.e('2D, Canvas, Color, Collision, Tween, Solid')
      .color('rgb(17,85,125)')
      .attr({x: this.x, y: this.y, w: DOORWIDTH, h: DOORHEIGHT});
  },
  open: function () {
    this.left.tween({w: 0}, 10);
    this.right.tween({w: 0, x: this.left.x + this.left.w}, 10);
  }
});
