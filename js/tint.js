// Init Crafty:
Crafty.init(668, 500, 'crafty');
Crafty.background('rgb(127,127,127)');

var A = {
  constTick: 0,
  gameTick: 0,
  count: 10
};

Crafty.c('Title', {
  init: function () {
    this.requires('2D, Canvas, Text');
  },
  setText: function (text) {
    this.text(text);
    this.textColor('#ffffff');
    this.textFont({family: 'mono', size: '30px'});
    this.h = 30;
    this.w = text.length*20;
    this.x = 334 - this.w/2;
    this.y = 40;
    return this;
  }
});

window.onload = function () {
  // disable scrolling
  document.onkeydown = function () {
    return event.keyCode != 38
      && event.keyCode != 40
      && event.keyCode != 32;
  };

  Crafty.e('TickManager, Keyboard')
    .attr(
      {
        slowMod: 5,
        paused: false
      }
    )
    .bind('KeyDown', function () {
      if (this.isDown('P')) {
        this.paused = true;
        Crafty.e('2D, Canvas, Color, Text')
          .color('rgb(200,200,200)')
          .attr({x: 50, y: 100, w: 503, h: 40})
          .textFont({family: 'mono', size: '30px'})
          .text('PAUSED. Press "U" to unpause')
          .bind('Unpause', this.destroy);
      }
    })
    .bind('KeyDown', function () {
      if (this.isDown('U')) {
        this.paused = false;
        Crafty.trigger('Unpause');
      }
    })
    .bind('ActionPoint', function () {
      A.slowMo = true;
    })
    .bind('Dismiss', function () {
      A.slowMo = false;
    })
    .bind('EnterFrame', function () {

      A.constTick = A.constTick + 1;
      if (this.paused) {
        return;
      }

      if (A.slowMo) {
        console.log('slomo')
        if (A.constTick % this.slowMod === 0) {
          A.gameTick = A.gameTick + 1;
          Crafty.trigger('GameTick');
        }
      } else {
        if (A.constTick % 2 === 0) {
          A.gameTick = A.gameTick + 1;
          Crafty.trigger('GameTick');
        }
      }

    });

  Crafty.e('CameraShake');

  Crafty.scene('sceneSplashScreen');
};
