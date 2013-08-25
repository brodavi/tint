Crafty.scene('sceneTransporterRoom', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Transporter Room');

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
      actionText: 'Teleport HyperDrive Regulator to Engine Room',
      response: 'Success!'
    },
    {
      actionText: 'Set Teleporter Portal',
      response: 'Set Portal from Sick Bay to Engine Room',
      result: function () {
        A.portalActive = true;
      }
    },
    {
      actionText: 'Teleport Into Space',
      response: 'Whoops.',
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
    .attr({x: 12, y: 302, actions: actions})
    .animate();

  // The Door
  Crafty.e('DoorUpDown')
    .setOrigin(256, -40);

  // The Portal
  Crafty.e('Portal')
    .attr({x: 284, y: 0, w: 100, h: 20})
    .color('rgb(24,24,24)')
    .setDestination('sceneHallway');

  Crafty.e('Player')
    .attr({x: 320, y: 220, z: 1000});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
