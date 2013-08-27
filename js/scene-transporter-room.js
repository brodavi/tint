Crafty.scene('sceneTransporterRoom', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  /**
   * Walls
   */

  // top left
  Crafty.e('Wall, Editable')
    .attr({x: 0, y: 0, w: 212, h: 37})
    .color('rgb(46,46,46)');

  // top right
  Crafty.e('Wall, Editable')
    .attr({x: 436, y: 1, w: 232, h: 37})
    .color('rgb(46,46,46)');

  // left
  Crafty.e('Wall, Editable')
    .attr({x: 0, y: 20, w: 57, h: 406})
    .color('rgb(46,46,46)');

  // right
  Crafty.e('Wall, Editable')
    .attr({x: 498, y: 20, w: 177, h: 556})
    .color('rgb(46,46,46)');

  // bottom
  Crafty.e('Wall, Editable')
    .attr({x: 0, y: 421, w: 500, h: 79})
    .color('rgb(46,46,46)');

  /**
   * Action Points
   */
  var actions = [
    {
      actionText: 'Teleport HyperDrive Regulator',
      response: 'Success!',
      result: function () {
        A.regulatorInPlaceTick = A.gameTick;
        A.regulatorInPlace = true;
        Crafty.trigger('RegulatorInPlace');
      }
    },
    {
      actionText: 'Set Teleporter Portal',
      response: 'Set Portal from Sick Bay to Engine Room',
      result: function () {
        A.portalActiveTick = A.gameTick;
        A.portalActive = true;
        Crafty.trigger('PortalActive');
      }
    },
    {
      actionText: 'Teleport Into Space',
      response: 'Well that was dumb.',
      result: function () {
        Crafty.trigger('Dismiss');
        Crafty.trigger('ResetTime');
      }
    }
  ];

  if (!A.foundManifest) {
    actions.splice(0, 1);
  }

  Crafty.e('ActionPoint')
    .attr({x: 300, y: 370, actions: actions})
    .animate();

  // The Door
  Crafty.e('DoorUpDown')
    .setOrigin(256, -40);

  // The Door Portal
  Crafty.e('Portal')
    .attr({x: 214, y: -10, w: 220, h: 20})
    .setDestination('sceneHallway');

  // the panel
  var panel = Crafty.e('Panel')
    .attr({x: 362, y: 412})
    .set();
  panel.rotation = 90;

  // The Transporter Portal 1
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
      Crafty.e('2D, Canvas, Color')
        .attr({x: portal.x - 40, y: portal.y + 150, w: 80, h: 10, z: 1000})
        .color('rgb(20,20,20)')
    );

  // The Transporter Portal2
  var portal2 = Crafty.e('2D, Canvas')
        .attr({x: 114, y: 50, w: 40, h: 50, z: 1000});

  portal.attach(
          // The Teleporter Portal2 Lights
          Crafty.e('2D, Canvas, Particles')
            .attr({x: portal2.x, y: portal2.y + 10})
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
            .attr({x: portal2.x - 25, y: portal2.y, w: 50, h: 150, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .attr({x: portal2.x - 35, y: portal2.y, w: 70, h: 20, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .attr({x: portal2.x - 35, y: portal2.y + 130, w: 70, h: 20, z: 1000})
            .color('rgba(27,27,200,0.2)')
        )
        .attach(
          Crafty.e('2D, Canvas, Particles')
            .attr({x: portal2.x, y: portal2.y + 130})
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
      Crafty.e('2D, Canvas, Color')
        .attr({x: portal2.x - 40, y: portal2.y + 150, w: 80, h: 10, z: 1000})
        .color('rgb(20,20,20)')
    );


  Crafty.e('Player')
    .attr({x: 320, y: 70, z: 1000});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

  Crafty.e('Title')
    .setText('Transporter Room')
    .attr({ y: 450});

  A.comingFrom = 'sceneTransporterRoom';

});
