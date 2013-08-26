Crafty.scene('sceneHallway', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Hallway');

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

  // left top
  Crafty.e('Wall')
    .attr({x: 4, y: 20, w: 7, h: 180})
    .color('rgb(46,46,46)');

  // left bottom
  Crafty.e('Wall')
    .attr({x: 4, y: 300, w: 7, h: 190})
    .color('rgb(46,46,46)');

  // right top
  Crafty.e('Wall')
    .attr({x: 658, y: 20, w: 7, h: 180})
    .color('rgb(46,46,46)');

  // right bottom
  Crafty.e('Wall')
    .attr({x: 658, y: 300, w: 7, h: 190})
    .color('rgb(46,46,46)');

  // bottom left
  Crafty.e('Wall')
    .attr({x: 9, y: 482, w: 272, h: 7})
    .color('rgb(46,46,46)');

  // bottom right
  Crafty.e('Wall')
    .attr({x: 386, y: 482, w: 272, h: 7})
    .color('rgb(46,46,46)');

  //The Door Portals
  Crafty.e('Portal')
    .attr({x: 284, y: 5, w: 100, h: 20})
    .setDestination('sceneBridge');

  Crafty.e('Portal')
    .attr({x: 284, y: 490, w: 100, h: 20})
    .setDestination('sceneTransporterRoom');

  Crafty.e('Portal')
    .attr({x: -10, y: 200, w: 20, h: 100})
    .setDestination('sceneSickBay');

  Crafty.e('Portal')
    .attr({x: 660, y: 200, w: 20, h: 100})
    .setDestination('sceneCrewQuarters');


  // The Doors
  Crafty.e('DoorUpDown')
    .setOrigin(256, -40);
  Crafty.e('DoorLeftRight')
    .setOrigin(-60, 172);
  Crafty.e('DoorLeftRight')
    .setOrigin(576, 172);
  Crafty.e('DoorUpDown')
    .setOrigin(267, 400);


  Crafty.e('Player')
    .attr({x: 260, y: 100, z: 100});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
