Crafty.scene('sceneHallway', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  Crafty.e('Title')
    .setText('Hallway')
    .attr({x: 50});

  /**
   * Walls
   */
  // top left
  Crafty.e('Wall')
    .attr({x: 200, y: 0, w: 34, h: 24})
    .color('rgb(46,46,46)');

  // top right
  Crafty.e('Wall')
    .attr({x: 436, y: 0, w: 24, h: 24})
    .color('rgb(46,46,46)');

  // left top
  Crafty.e('Wall')
    .attr({x: 0, y: 0, w: 206, h: 145})
    .color('rgb(46,46,46)');

  // left bottom
  Crafty.e('Wall')
    .attr({x: 0, y: 350, w: 207, h: 158})
    .color('rgb(46,46,46)');

  // right top
  Crafty.e('Wall')
    .attr({x: 458, y: 0, w: 217, h: 146})
    .color('rgb(46,46,46)');

  // right bottom
  Crafty.e('Wall')
    .attr({x: 458, y: 349, w: 217, h: 163})
    .color('rgb(46,46,46)');

  // bottom left
  Crafty.e('Wall')
    .attr({x: 199, y: 482, w: 41, h: 21})
    .color('rgb(46,46,46)');

  // bottom right
  Crafty.e('Wall')
    .attr({x: 443, y: 482, w: 24, h: 19})
    .color('rgb(46,46,46)');

  //The Door Portals
  Crafty.e('Portal')
    .attr({x: 284, y: 5, w: 100, h: 20})
    .setDestination('sceneBridge');

  Crafty.e('Portal')
    .attr({x: 242, y: 492, w: 200, h: 20})
    .setDestination('sceneTransporterRoom');

  Crafty.e('Portal')
    .attr({x: 18, y: 120, w: 20, h: 240})
    .setDestination('sceneSickBay');

  Crafty.e('Portal')
    .attr({x: 625, y: 140, w: 20, h: 210})
    .setDestination('sceneCrewQuarters');

  if (A.comingFrom === 'sceneBridge') {
    Crafty.e('Player')
      .attr({x: 330, y: 60});
  } else if (A.comingFrom === 'sceneSickBay') {
    Crafty.e('Player')
      .attr({x: 220, y: 270});
  } else if (A.comingFrom === 'sceneCrewQuarters') {
    Crafty.e('Player')
      .attr({x: 420, y: 270});
  } else if (A.comingFrom === 'sceneTransporterRoom') {
    Crafty.e('Player')
      .attr({x: 330, y: 450});
  }

  // The Doors
  Crafty.e('DoorUpDown')
    .setOrigin(256, -60);
  Crafty.e('DoorLeftRight')
    .setOrigin(122, 172);
  Crafty.e('DoorLeftRight')
    .setOrigin(398, 172);
  Crafty.e('DoorUpDown')
    .setOrigin(267, 420);

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

  A.comingFrom = 'sceneHallway';

});
