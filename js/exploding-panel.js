// The "Piece" COMPONENT
Crafty.c("Piece", {
  init: function () {
    this.requires("2D, Canvas, Color, Tween, Gravity")
    .color("rgb(34, 64, 27)")
    .attr({w: 10, h: 10});
  }
});

// The ExplodingPanel COMPONENT
Crafty.c("ExplodingPanel", {
  init: function() {
    this.requires('2D, Canvas, Color, Collision')
      .color('rgb(100, 200, 32)')
      .attr({w: 50, h: 50, explodOnTick: 1000})
      .explodeOnTick()
      .explodeOnTouch();
  },

  addPieces: function () {
    this.pieces = [];
    this.pieces[0] = null;
    this.pieces[1] = null;
    this.pieces[2] = null;

    console.log('pieces before adding: ', this.pieces);

    for (var i in this.pieces) {
      this.pieces[i] = Crafty.e("Piece").attr({ x: this.x+20, y: this.y+20});

      console.log('this.pieces[0]: ', this.pieces[0]);
    }

    console.log('pieces after adding: ', this.pieces);
    console.log('pieces[0] after adding: ', this.pieces[0]);

    return this;
  },

  explodeOnTouch: function () {

    console.log('this: ', this);

    this.onHit('Player', this.explode);

    return this;
  },

  explodeOnTick: function () {
    if (A.tick === this.explodeOnTick) {
      console.log('A.tick: ' + A.tick + 'this.explodeOnTick: ' + this.explodeOnTick);
      this.explode();
    }

    return this;
  },

  explode: function () {

    for (var i in this.pieces) {
      this.pieces[i].tween({
        x: this.x + 50 - Math.random()*100,
        y: this.y + 50 - Math.random()*100
      }, 100);
    }

    return this;
  }

});
