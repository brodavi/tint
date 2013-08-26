Crafty.scene('sceneBridge', function () {
  Crafty.background('rgb(127,127,127)');

  // Crafty.e('ExplodingPanel')
  //   .attr({x: 50, y: 100, explodeOnTick: 100, pieceNum: 10})
  //   .init2();

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Bridge');

  /**
   * Walls
   */
  // viewScreen
  Crafty.e('2D, Canvas, Color')
    .attr({x: 10, y: 20, w: 650, h: 150})
    .color('rgb(46,46,46)');
  Crafty.e('2D, Canvas, Color')
    .attr({x: 20, y: 30, w: 630, h: 130})
    .color('rgb(0,0,0)');

  for (var i = 0; i < 100; i++) {
    Crafty.e('2D, Canvas,Color')
      .color('rgba(255,255,255,' + Math.random() + ')')
      .attr({x:Math.random()*630 + 20, y:Math.random()*130 + 30, w:2, h:2});
  }

  // Crafty.e('2D, Canvas, StarGenerator')
  //   .attr({ x: 315, y: 50,
  //           getGoing: function () {
  //             this.randMod = Crafty.math.randomInt(0, 20);
  //             this.bind('EnterFrame', function () {
  //               if (A.constTick % 10 === 0) {
  //                 this.randMod = Crafty.math.randomInt(0, 20);
  //                 this.addStar();
  //                 this.addStar();
  //                 this.addStar();
  //                 this.trigger('Change');
  //                 this.draw();
  //               }
  //             });
  //             this.addStar = function () {
  //               this.attach(
  //                 Crafty.e('2D, Canvas, Color')
  //                   .color('rgb(255,255,255)')
  //                   .attr({x: 315, y: 100, w: 2, h: 2, dx: Math.random()*2-1, dy: Math.random()*2-1})
  //                   .bind('EnterFrame', function () {
  //                     if (this.x > 650 ||
  //                         this.x < 30 ||
  //                         this.y > 150 ||
  //                         this.y < 30) {
  //                       this.destroy();
  //                     } else {
  //                       this.x += this.dx;
  //                       this.y += this.dy;
  //                       this.dx *= 1.1;
  //                       this.dy *= 1.1;
  //                     }
  //                   }));
  //               this.trigger('Change');
  //             };
  //             for (var i = 0; i < 40; i++) {
  //               this.addStar();
  //             }
  //           }
  //         })
  // .getGoing();

  // top
  Crafty.e('Wall')
    .attr({x: 10, y: 200, w: 650, h: 50})
    .color('rgb(46,46,46)');

  // left
  Crafty.e('Wall')
    .attr({x: 4, y: 230, w: 7, h: 256})
    .color('rgb(46,46,46)');

  // right
  Crafty.e('Wall')
    .attr({x: 658, y: 230, w: 7, h: 256})
    .color('rgb(46,46,46)');

  // bottom left
  Crafty.e('Wall')
    .attr({x: 9, y: 482, w: 272, h: 7})
    .color('rgb(46,46,46)');

  // bottom right
  Crafty.e('Wall')
    .attr({x: 386, y: 482, w: 272, h: 7})
    .color('rgb(46,46,46)');

  /**
   * Action Points
   */
  Crafty.e('ActionPoint')
    .attr({x: 12, y: 302, actions:
        [
          {
            actionText: 'Scan Anomaly',
            response: 'Sensors are not operational'
          },
          {
            actionText: 'Engage Warp Drive',
            response: 'Engine is offline'
          },
          {
            actionText: 'Eject Warp Core',
            response: 'Warp core ejection system offline'
          },
          {
            actionText: 'Show Map',
            response: '',
            obj: 'Map'
          }
        ]
      })
    .animate();

  // The Door
  Crafty.e('DoorUpDown')
    .setOrigin(256, 402);

  // The Portal
  Crafty.e('Portal')
    .attr({x: 284, y: 490, w: 100, h: 20})
    .setDestination('sceneHallway');

  Crafty.e('Player')
    .attr({x: 220, y: 320, z: 1000});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
