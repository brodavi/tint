Crafty.scene('sceneEngineRoom', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  Crafty.e('Title')
    .setText('Engine Room')
    .attr({x: 50});

  /**
   * Walls
   */

  // top left
  Crafty.e('Wall')
    .attr({x: 9, y: 20, w: 272, h: 7})
    .color('rgb(46,46,46)');

  // top right
  Crafty.e('Wall')
    .attr({x: 386, y: 20, w: 272, h: 7})
    .color('rgb(46,46,46)');

  // left
  Crafty.e('Wall')
    .attr({x: 4, y: 20, w: 7, h: 556})
    .color('rgb(46,46,46)');

  // right
  Crafty.e('Wall')
    .attr({x: 658, y: 20, w: 7, h: 556})
    .color('rgb(46,46,46)');

  // bottom
  Crafty.e('Wall')
    .attr({x: 6, y: 482, w: 660, h: 7})
    .color('rgb(46,46,46)');

  /**
   * Action Points
   */
  var actions = [
    {
      actionText: 'Connect Regulator to Engine',
      result: function () {
        Crafty.scene('sceneWin');
      }
    },
    {
      actionText: 'Attempt to fix Engine',
      response: 'You need a HyperDrive Regulator!',
      result: function () {
        Crafty.trigger('ResetTime');
      }
    }
  ];

  if (!A.regulatorInPlace) {
    actions.splice(0,1);
  } else {
    actions.splice(1,1);
    console.log(actions);
  }

  Crafty.e('ActionPoint')
    .attr({x: 300, y: 450, actions: actions})
    .animate();

  // The Radiation
  Crafty.e('2D, Canvas, Particles')
    .attr({x: 300, y: 500})
    .particles({
      maxParticles: 100,
      size: 3,
      sizeRandom: 3,
      speed: 1,
      speedRandom: 1.2,
      lifeSpan: 29,
      lifeSpanRandom: 7,
      startColour: [255, 46, 46, 0.5],
      startColourRandom: [55, 16, 26, 0.5],
      endColour: [243, 23, 52, 0.7],
      endColourRandom: [43, 123, 52, 0.7],
      spread: 300,
      duration: -1,
      fastMode: true,
      jitter: 2
    });

  // The Radiation Trigger
  Crafty.e('2D, Canvas, Collision')
    .attr({x: 0, y: 300, w: 700, h: 400})
    .onHit('Player', function () {
      if (!A.protected) {
        Crafty.trigger('ResetTime');
        Crafty.e('ResponseNotification')
          .text('The radiation killed you instantly');
      }
    });

  // The Door
  Crafty.e('DoorUpDown')
    .setOrigin(256, -40);

  // The Engine
  Crafty.e('2D, Canvas, Color')
    .color('rgb(90,90,90)')
    .attr({x: 150, y: 300, w: 100, h: 150});
  Crafty.e('2D, Canvas, Color')
    .color('rgb(40,40,40)')
    .attr({x: 170, y: 320, w: 60, h: 110});
  Crafty.e('2D, Canvas, Text')
    .attr({x: 160, y: 290})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#000000', 1)
    .text('Engine')
    .trigger('Change');

  // The Regulator
  var regulator = Crafty.e('2D, Canvas')
        .attach(
          Crafty.e('2D, Canvas, Color')
            .color('rgb(90,90,90)')
            .attr({x: 350, y: 380, w: 100, h: 50})
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .color('rgb(40,40,40)')
            .attr({x: 370, y: 400, w: 60, h: 10})
          )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .color('rgb(40,40,40)')
            .attr({y: 390, x: 360, w: 10, h: 30})
        )
        .attach(
          Crafty.e('2D, Canvas, Color')
            .color('rgb(40,40,40)')
            .attr({y: 390, x: 410, w: 10, h: 30})
        )
        .attach(
          Crafty.e('2D, Canvas, Text')
            .attr({x: 350, y: 370})
            .textFont({family: 'mono', size: '20px'})
            .textColor('#000000', 1)
            .text('Regulator')
        );

  regulator.y = 9999;

  this.bind('RegulatorInPlace', function () {
    regulator.y = 0;
    regulator.trigger('Change');
  });

  if (A.regulatorInPlace) {
    regulator.y = 0;
    regulator.trigger('Change');
  }

  // The Portal
  Crafty.e('Portal')
    .attr({x: 284, y: 0, w: 100, h: 20})
    .setDestination('sceneCargoBay');

  Crafty.e('Player')
    .attr({x: 320, y: 120, z: 1000});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
