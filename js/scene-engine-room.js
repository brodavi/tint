Crafty.scene('sceneEngineRoom', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  /**
   * Walls
   */

  // top left
  Crafty.e('Wall')
    .attr({x: 0, y: 0, w: 272, h: 97})
    .color('rgb(46,46,46)');

  // left
  Crafty.e('Wall')
    .attr({x: 0, y: 0, w: 127, h: 506})
    .color('rgb(46,46,46)');

  // right
  Crafty.e('Wall')
    .attr({x: 485, y: 0, w: 187, h: 506})
    .color('rgb(46,46,46)');

  // bottom
  Crafty.e('Wall')
    .attr({x: 48, y: 459, w: 460, h: 47})
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
      response: 'You need a HyperDrive Regulator!'
    }
  ];

  if (!A.regulatorInPlace) {
    actions.splice(0,1);
  } else {
    actions.splice(1,1);
    console.log(actions);
  }

  Crafty.e('ActionPoint')
    .attr({x: 250, y: 350, actions: actions})
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
    .attr({x: 0, y: 250, w: 700, h: 400})
    .onHit('Player', function () {
      if (!A.resistsRadiation) {
        Crafty.trigger('ResetTime');
        Crafty.e('ResponseNotification')
          .text('The radiation killed you instantly');
      }
    });

  // The Door
  Crafty.e('DoorUpDown')
    .setOrigin(300, -40);

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
        .attr({x: 300, y: 380});

  regulator
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(30,30,30)')
        .attr({x: regulator.x-2, y: regulator.y-2, w: 104, h: 54})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(90,90,90)')
        .attr({x: regulator.x, y: regulator.y, w: 100, h: 50})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(40,40,40)')
        .attr({x: regulator.x + 25, y: regulator.y + 20, w: 60, h: 10})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(40,40,40)')
        .attr({y: regulator.y + 5, x: regulator.x + 50, w: 10, h: 30})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(40,40,40)')
        .attr({y: regulator.y + 15, x: regulator.x + 30, w: 10, h: 30})
    );

  regulator.y = 9999;

  this.bind('RegulatorInPlace', function () {
    regulator.y = 380;
    regulator.trigger('Change');
  });

  if (A.regulatorInPlace) {
    regulator.y = 380;
    regulator.trigger('Change');
  }

  // The Portal
  Crafty.e('Portal')
    .attr({x: 274, y: 0, w: 232, h: 15})
    .setDestination('sceneCargoBay');

  Crafty.e('Player')
    .attr({x: 320, y: 50, z: 1000});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

  Crafty.e('Title')
    .setText('Engine Room')
    .attr({x: 50});

  A.comingFrom = 'sceneEngineRoom';

});
