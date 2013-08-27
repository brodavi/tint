Crafty.scene('sceneBridge', function () {
  Crafty.background('rgb(127,127,127)');

  // Crafty.e('ExplodingPanel')
  //   .attr({x: 50, y: 100, explodeOnTick: 100, pieceNum: 10})
  //   .init2();

  Crafty.e('Transition');

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
    .attr({x: 0, y: 200, w: 700, h: 50})
    .color('rgb(46,46,46)');

  // left
  Crafty.e('Wall')
    .attr({x: 0, y: 230, w: 20, h: 356})
    .color('rgb(46,46,46)');

  // right
  Crafty.e('Wall')
    .attr({x: 630, y: 230, w: 100, h: 356})
    .color('rgb(46,46,46)');

  // bottom left
  Crafty.e('Wall')
    .attr({x: 9, y: 482, w: 222, h: 20})
    .color('rgb(46,46,46)');

  // bottom right
  Crafty.e('Wall')
    .attr({x: 386 + 48, y: 482, w: 230, h: 20})
    .color('rgb(46,46,46)');


  var leftPanel = Crafty.e('Panel')
    .attr({x: 72, y: 232})
    .set();
  leftPanel.rotation = 45;

  var rightPanel = Crafty.e('Panel')
        .attr({x: 572, y: 252})
        .set();
  rightPanel.rotation = -45;

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
          }
        ]
      })
    .animate();

  // The Door
  Crafty.e('DoorUpDown')
    .setOrigin(256, 422);

  // The Portal
  Crafty.e('Portal')
    .attr({x: 234, y: 494, w: 200, h: 20})
    .setDestination('sceneHallway');

  if (A.comingFrom === 'sceneHallway') {
    Crafty.e('Player')
      .attr({x: 310, y: 470});
  } else {
    Crafty.e('Player')
      .attr({x: 150, y: 320});
  }

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

  A.comingFrom = 'sceneBridge';

  Crafty.e('Title')
    .setText('Bridge')
    .attr({x: 50});

});
