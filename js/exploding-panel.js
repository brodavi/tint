// The 'Piece' COMPONENT
Crafty.c('Piece', {
  init: function () {
    this.requires('2D, Canvas, Color, Tween, Gravity')
    .color('rgb(34, 64, 27)')
    .attr({w: 10, h: 10});
  }
});

// The 'Floor' COMPONENT
Crafty.c('Floor', {
  init: function () {
    this.requires('2D, Canvas, Color')
    .color('rgb(255, 0, 0)')
    .attr({w: 200, h: 2});
  }
});


// The ExplodingPanel COMPONENT
Crafty.c('ExplodingPanel', {
  init: function() {
    this.requires('2D, Canvas, Color, Collision')
      .color('rgb(100, 200, 32)')
      .attr({w: 50, h: 50, explodOnTick: 1000})
      .explodeOnTick()
      .explodeOnTouch();
  },

  init2: function () {
    this.pieces = [];

    for (var i = 0; i < 20; i++) {
      this.pieces[i] = Crafty.e('Piece').attr({ x: this.x+20, y: this.y+20});
    }

    Crafty.e('Floor')
      .attr({ x: this.x - 100, y: this.y + this.h });

    return this;
  },

  explodeOnTouch: function () {
    this.onHit('Player', this.explode);

    return this;
  },

  explodeOnTick: function () {
    this.bind('EnterFrame', function () {
      if (A.tick === this.explodeOnTick) {
        this.explode();
      }
    });

    return this;
  },

  explode: function () {

    for (var i in this.pieces) {

      this.pieces[i].x = this.pieces[i].x + 30 - Math.random() * 60;
      this.pieces[i].y = this.pieces[i].y + 30 - Math.random() * 60;


      // this.pieces[i].dx = this.x + 1 - Math.random();
      // this.pieces[i].dy = this.y + 1 - Math.random();

      // // set up velocity (should be a component?)
      // this.pieces[i].bind('EnterFrame', function () {
      //   console.log('this.dx: ' + this.dx);
      //   this.x = this.x + this.dx;
      //   this.y = this.y + this.dy;
      // });

      this.pieces[i].gravity('Floor');
    }

    return this;
  }

});
