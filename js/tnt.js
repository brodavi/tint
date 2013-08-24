// Init Crafty:
Crafty.init(668, 300, 'crafty');
Crafty.background('rgb(127,127,127)');

// The Player COMPONENT
Crafty.c("Player", {
  init: function() {
    this.requires('2D, Canvas, Color, Collision, Multiway')
      .multiway(4, {
           UP_ARROW: -90,
           DOWN_ARROW: 90,
           LEFT_ARROW: 180,
           RIGHT_ARROW: 0
       })
      .color('rgb(20, 75, 40)')
      .attr({x: 50, y: 50, w: 25, h: 50})
      .onDoorHit()
      .stopOnSolids();
  },

  onDoorHit: function () {
    this.onHit('Door', function () {
      console.log('scene 2');
      Crafty.scene("Scene2");
    });
    return this;
  },

  // Registers a stop-movement function to be called when
  // this entity hits an entity with the "Solid" component
  stopOnSolids: function () {
    this.onHit('Solid', this.stopMovement);
    return this;
  },
 
  // Stops the movement
  stopMovement: function () {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  }
});

// The Player ENTITY
Crafty.e("Player");

// The Wall ENTITY
Crafty.e("2D, Canvas, Color, Collision, Solid, Wall")
   .attr({x: 10, y: 50, w: 5, h: 150})
   .color("rgb(0,124,124)");

// The Door ENTITY
Crafty.e("2D, Canvas, Color, Collision, Solid, Door")
   .attr({x: 150, y: 50, w: 50, h: 60})
   .color("rgb(24,24,24)");


// //Paddles
// Crafty.e("Paddle, 2D, DOM, Color, Multiway")
//   .color('rgb(255,0,0)')
//   .attr({ x: 20, y: 100, w: 10, h: 100 })
//   .multiway(4, { W: -90, S: 90 });
// Crafty.e("Paddle, 2D, DOM, Color, Multiway")
//   .color('rgb(0,255,0)')
//   .attr({ x: 580, y: 100, w: 10, h: 100 })
//   .multiway(4, { UP_ARROW: -90, DOWN_ARROW: 90 });

// //Ball
// Crafty.e("2D, DOM, Color, Collision")
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
//       Crafty("LeftPoints").each(function () {
//         this.text(++this.points + " Points") });
//     }
//     if (this.x < 10) {
//       this.x = 300;
//       Crafty("RightPoints").each(function () {
//         this.text(++this.points + " Points") });
//     }

//     this.x += this.dX;
//     this.y += this.dY;
//   })
//   .onHit('Paddle', function () {
//     this.dX *= -1;
//   })

// //Score boards
// Crafty.e("LeftPoints, DOM, 2D, Text")
//   .attr({ x: 20, y: 20, w: 100, h: 20, points: 0 })
//   .text("0 Points");
// Crafty.e("RightPoints, DOM, 2D, Text")
//   .attr({ x: 515, y: 20, w: 100, h: 20, points: 0 })
//   .text("0 Points");
