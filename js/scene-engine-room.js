Crafty.scene('sceneEngineRoom', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Engine Room');

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
      response: 'Success!',
      result: function () {
        Crafty.scene('Win');
      }
    }
  ];

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

  // The Portal
  Crafty.e('Portal')
    .attr({x: 284, y: 0, w: 100, h: 20})
    .color('rgb(24,24,24)')
    .setDestination('sceneCargoBay');

  Crafty.e('Player')
    .attr({x: 320, y: 120, z: 1000});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
