Crafty.scene('sceneSickBay', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  /**
   * Walls
   */
  // top
  Crafty.e('Wall')
    .attr({x: 0, y: 0, w: 670, h: 260})
    .color('rgb(46,46,46)');

  // left
  Crafty.e('Wall')
    .attr({x: 0, y: 230, w: 40, h: 276})
    .color('rgb(46,46,46)');

  // bottom
  Crafty.e('Wall')
    .attr({x: 39, y: 450, w: 630, h: 57})
    .color('rgb(46,46,46)');

  //cross
  Crafty.e('2D, Canvas, Color')
    .color('rgb(255,255,255)')
    .attr({x: 45, y: 45, w: 60, h: 60});
  Crafty.e('2D, Canvas, Color')
    .color('rgb(255,0,0)')
    .attr({x: 50, y: 50 + 17, w: 50, h: 15});
  Crafty.e('2D, Canvas, Color')
    .color('rgb(255,0,0)')
    .attr({x: 50 + 17, y: 50, w: 15, h: 50});

  // beds
  Crafty.e('2D, Canvas, Color, Solid')
    .color('rgb(200,200,200)')
    .attr({x: 89, y: 240, w: 80, h: 130});
  Crafty.e('2D, Canvas, Color, Editable')
    .color('rgb(157,157,157)')
    .attr({x: 99, y: 245, w: 60, h: 30});

  Crafty.e('2D, Canvas, Color, Solid')
    .color('rgb(200,200,200)')
    .attr({x: 189, y: 240, w: 80, h: 130});
  Crafty.e('2D, Canvas, Color, Editable')
    .color('rgb(157,157,157)')
    .attr({x: 199, y: 245, w: 60, h: 30});

  // cabinet
  Crafty.e('2D, Canvas, Color, Solid, Collision')
    .color('rgb(100,100,100)')
    .attr({x: 289, y: 200, w: 80, h: 130});
  Crafty.e('2D, Canvas, Color, Editable')
    .color('rgb(57,57,57)')
    .attr({x: 294, y: 205, w: 70, h: 20});
  Crafty.e('2D, Canvas, Color, Editable')
    .color('rgb(57,57,57)')
    .attr({x: 294, y: 235, w: 70, h: 20});
  Crafty.e('2D, Canvas, Color, Editable')
    .color('rgb(57,57,57)')
    .attr({x: 294, y: 265, w: 70, h: 10});
  Crafty.e('2D, Canvas, Color, Editable')
    .color('rgb(57,57,57)')
    .attr({x: 294, y: 285, w: 70, h: 10});

  // bed
  Crafty.e('2D, Canvas, Color, Solid')
    .color('rgb(200,200,200)')
    .attr({x: 389, y: 240, w: 80, h: 130});
  Crafty.e('2D, Canvas, Color, Editable')
    .color('rgb(157,157,157)')
    .attr({x: 399, y: 245, w: 60, h: 30});

  /**
   * Action Points
   */
  Crafty.e('ActionPoint')
    .attr({x: 312, y: 320, actions:
           [
             {
               actionText: 'Inject Radiation Resistance',
               response: 'You are SOMEWHAT protected now.',
               result: function () {
                 A.resistsRadiation = true;
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
    .attr({x: 661, y: 262, w: 20, h: 190})
    .setDestination('sceneHallway');

  // The Transporter Portal
  var portal = Crafty.e('2D, Canvas')
        .attr({x: 114, y: 250, w: 40, h: 50, z: 1000});

  portal.attach(
          // The Teleporter Portal Lights
          Crafty.e('2D, Canvas, Particles')
            .attr({x: portal.x, y: portal.y + 10})
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
            .attr({x: portal.x - 25, y: portal.y, w: 50, h: 150, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .attr({x: portal.x - 35, y: portal.y, w: 70, h: 20, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .attr({x: portal.x - 35, y: portal.y + 130, w: 70, h: 20, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Particles')
            .attr({x: portal.x, y: portal.y + 130})
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
        )
    .attach(
      Crafty.e('Portal, Editable')
        .attr({x: portal.x - 35, y: portal.y + 125, w: 80, h: 40})
        .setDestination('sceneEngineRoom')
    );

  if (A.portalActive) {
    portal.y = 280;
  } else {
    portal.y = 9999;
  }

  this.bind('PortalActive', function () {
    portal.y = 280;
  });

  // Player has highest Z
  Crafty.e('Player')
    .attr({x: 600, y: 360});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

  Crafty.e('Title')
    .setText('Sick Bay');

  A.comingFrom = 'sceneSickBay';

});
