Crafty.scene('sceneSickBay', function () {
  Crafty.background('rgb(127,127,127)');

  // Crafty.e('ExplodingPanel')
  //   .attr({x: 50, y: 100, explodeOnTick: 100, pieceNum: 10})
  //   .init2();

  Crafty.e('Transition');

  Crafty.e('Title')
    .setText('Sick Bay');

  /**
   * Walls
   */
  // top
  Crafty.e('Wall')
    .attr({x: 10, y: 200, w: 650, h: 50})
    .color('rgb(46,46,46)');

  // left
  Crafty.e('Wall')
    .attr({x: 4, y: 230, w: 7, h: 256})
    .color('rgb(46,46,46)');

  // right top
  Crafty.e('Wall')
    .attr({x: 658, y: 230, w: 7, h: 80})
    .color('rgb(46,46,46)');

  // right bottom
  Crafty.e('Wall')
    .attr({x: 658, y: 380, w: 7, h: 110})
    .color('rgb(46,46,46)');

  // bottom
  Crafty.e('Wall')
    .attr({x: 6, y: 482, w: 660, h: 7})
    .color('rgb(46,46,46)');

  /**
   * Action Points
   */
  Crafty.e('ActionPoint')
    .attr({x: 312, y: 250, actions:
           [
             {
               actionText: 'Inject Radiation Resistance',
               response: 'You are SOMEWHAT protected now.',
               result: function () {
                 A.protected = true;
               }
             }
           ]
          })
  .animate();

  // The Door
  Crafty.e('DoorLeftRight')
    .setOrigin(580, 270);

  // The Door Portal
  Crafty.e('Portal')
    .attr({x: 657, y: 296, w: 20, h: 100})
    .setDestination('sceneHallway');

  // The Transporter Portal
  var portal = Crafty.e('Portal')
        .attr({x: 84, y: 410, w: 40, h: 50, z: 1000})
        .setDestination('sceneEngineRoom')
        .attach(

          // The Teleporter Portal Lights TODO: NEEDS TO SPARKLE!!!!
          Crafty.e('2D, Canvas, Particles')
            .attr({x: 100, y: 340})
            .particles({
              angle: 180,
              gravity: { x: 0, y: 0.4 },
              maxParticles: 80,
              size: 1,
              sizeRandom: 3,
              speed: 3,
              speedRandom: 5,
              lifeSpan: 5,
              lifeSpanRandom: 10,
              startColour: [46, 46, 146, 0.5],
              startColourRandom: [15, 16, 46, 0.3],
              endColour: [43, 23, 152, 0.7],
              endColourRandom: [43, 23, 72, 0.6],
              spread: 10,
              duration: -1,
              fastMode: true,
              jitter: 1
            })
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .attr({x: 75, y: 320, w: 50, h: 150, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .attr({x: 65, y: 320, w: 70, h: 20, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .attr({x: 65, y: 450, w: 70, h: 20, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Particles')
            .attr({x: 100, y: 450})
            .particles({
              angle: 0,
              gravity: { x: 0, y: -0.4 },
              maxParticles: 80,
              size: 1,
              sizeRandom: 3,
              speed: 3,
              speedRandom: 5,
              lifeSpan: 5,
              lifeSpanRandom: 10,
              startColour: [46, 46, 146, 0.5],
              startColourRandom: [15, 16, 46, 0.3],
              endColour: [43, 23, 152, 0.7],
              endColourRandom: [43, 23, 72, 0.6],
              spread: 10,
              duration: -1,
              fastMode: true,
              jitter: 1
            })
        );

  portal.y = 9999;

  this.bind('PortalActive', function () {
    portal.y = 420;
  });

  if (!A.portalActive) {
    portal.y = 420;
  }

  // Player has highest Z
  Crafty.e('Player')
    .attr({x: 500, y: 320});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
