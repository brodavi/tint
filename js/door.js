Crafty.c('DoorUpDown', {
  init: function () {
    this.requires('2D, Canvas, Collision, Editable');
    this.attr({w: 150, h: 150});
    //this.color('rgba(72,58,32,100)');
    this.onHit('Player', this.open);
  },
  setOrigin: function (x, y) {

    this.x = x;
    this.y = y;

    const DOORWIDTH = 100;
    const DOORHEIGHT = 15;

    this.left = Crafty.e('2D, Canvas, Color, Collision, Tween, Solid')
      .color('rgb(17,185,25)')
      .attr({x: this.x - this.w/2 + DOORWIDTH/2, y: this.y + this.h/2 - DOORHEIGHT/2, w: DOORWIDTH, h: DOORHEIGHT});

    this.right = Crafty.e('2D, Canvas, Color, Collision, Tween, Solid')
      .color('rgb(17,85,125)')
      .attr({x: this.x + this.w/2, y: this.y + this.h/2 - DOORHEIGHT/2, w: DOORWIDTH, h: DOORHEIGHT});
  },
  open: function () {
    this.left.tween({w: 0}, 10);
    this.right.tween({w: 0, x: this.right.x + this.right.w}, 10);
  }
});


Crafty.c('DoorLeftRight', {
  init: function () {
    this.requires('2D, Canvas, Collision, Editable');
    this.attr({w: 150, h: 150});
    this.onHit('Player', this.open);
  },
  setOrigin: function (x, y) {

    this.x = x;
    this.y = y;

    const DOORHEIGHT = 100;
    const DOORWIDTH = 15;

    this.up = Crafty.e('2D, Canvas, Color, Collision, Tween, Solid')
      .color('rgb(17,185,25)')
      .attr({y: this.y - this.h/2 + DOORHEIGHT/2, x: this.x + this.w/2 - DOORWIDTH/2, w: DOORWIDTH, h: DOORHEIGHT});

    this.down = Crafty.e('2D, Canvas, Color, Collision, Tween, Solid')
      .color('rgb(17,85,125)')
      .attr({y: this.y + this.h/2, x: this.x + this.w/2 - DOORWIDTH/2, w: DOORWIDTH, h: DOORHEIGHT});
  },
  open: function () {
    this.up.tween({h: 0}, 10);
    this.down.tween({h: 0, y: this.down.y + this.down.h}, 10);
  }
});
