// Init Crafty:
Crafty.init(668, 500, 'crafty');
Crafty.background('rgb(127,127,127)');

var A = {
  constTick: 0,
  gameTick: 0,
  count: 10
};

window.onload = function () {
  // disable scrolling
  document.onkeydown = function () {
    return event.keyCode != 38
      && event.keyCode != 40
      && event.keyCode != 32;
  };

  Crafty.e('TickManager')
    .attr(
      {
        slowMo: false,
        slowMod: 5,
        paused: false
      }
    )
    .bind('Pause', function () {
      this.paused = true;
    })
    .bind('ActionPoint', function () {
      this.slowMo = true;
    })
    .bind('Dismiss', function () {
      this.slowMo = false;
    })
    .bind('EnterFrame', function () {

      A.constTick = A.constTick + 1;
      if (this.paused) {
        return;
      }

      if (this.slowMo) {
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

  Crafty.scene('sceneBridge');
};

// //Paddles
// Crafty.e('Paddle, 2D, DOM, Color, Multiway')
//   .color('rgb(255,0,0)')
//   .attr({ x: 20, y: 100, w: 10, h: 100 })
//   .multiway(4, { W: -90, S: 90 });
// Crafty.e('Paddle, 2D, DOM, Color, Multiway')
//   .color('rgb(0,255,0)')
//   .attr({ x: 580, y: 100, w: 10, h: 100 })
//   .multiway(4, { UP_ARROW: -90, DOWN_ARROW: 90 });

// //Ball
// Crafty.e('2D, DOM, Color, Collision')
//   .color('rgb(0,0,255)')
//   .attr({ x: 300, y: 150, w: 10, h: 10,
//           dX: Crafty.math.randomInt(2, 5),
//           dY: Crafty.math.randomInt(2, 5) })
//   .bind('EnterFrame', function () {
//     //hit floor or roof
//     if (this.y <= 0 || this.y >= 290)
//       this.dY *= -1;

//     if (this.x > 600) {
//       this.x = 300;
//       Crafty('LeftPoints').each(function () {
//         this.text(++this.points + ' Points') });
//     }
//     if (this.x < 10) {
//       this.x = 300;
//       Crafty('RightPoints').each(function () {
//         this.text(++this.points + ' Points') });
//     }

//     this.x += this.dX;
//     this.y += this.dY;
//   })
//   .onHit('Paddle', function () {
//     this.dX *= -1;
//   })

// //Score boards
// Crafty.e('LeftPoints, DOM, 2D, Text')
//   .attr({ x: 20, y: 20, w: 100, h: 20, points: 0 })
//   .text('0 Points');
// Crafty.e('RightPoints, DOM, 2D, Text')
//   .attr({ x: 515, y: 20, w: 100, h: 20, points: 0 })
//   .text('0 Points');
