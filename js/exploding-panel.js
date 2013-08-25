Crafty.c('Piece', {

  init: function () {
    this.requires('2D, Canvas, Color, Tween, Collision, Gravity')
    .color('rgb(34, 64, 27)')
    .attr({w: 10, h: 10});
  },

  update: function () {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  },

  fly: function (v) {

    this.dx = v/2 - Math.random() * v;
    this.dy = v/2 - Math.random() * v;

    // set up velocity (should be a component?)
    this.bind('GameTick', this.update);

    //this.gravity('Floor');
    this.gravityConst(.15);

    this.onHit('Floor', function (floors) {
      this.y = floors[0].y - this.height;
      this.dx = 0;
      this.dy = 0;
      this.antigravity();
      this.unbind('GameTick', this.update);
    });
  }
});

Crafty.c('Floor', {
  init: function () {
    this.requires('2D, Canvas, Color, Collision')
    .color('rgb(255, 0, 0)')
    .attr({w: 200, h: 2});
  }
});

Crafty.c('ExplodingPanel', {
  init: function() {
    this.requires('2D, Canvas, Color, Collision')
      .color('rgb(100, 200, 32)')
      .attr({w: 50, h: 50})
      .explodeOnTick();
  },

  init2: function () {

    this.pieces = [];

    for (var i = 0; i < this.pieceNum; i++) {
      this.pieces[i] = Crafty.e('Piece').attr(
        { x: this.x+20, y: this.y+20 }
      );
    }

    Crafty.e('Floor')
      .attr({ x: this.x - 100, y: this.y + this.h });

    return this;
  },

  explodeOnTick: function () {
    this.bind('GameTick', function () {
      if (A.gameTick === this.explodeOnTick) {
        this.explode();
      }
    });

    return this;
  },

  explode: function () {

    Crafty.trigger('Shake');

    for (var i in this.pieces) {
      this.pieces[i].fly(Math.random() * 10);
    }

    return this;
  }

});
