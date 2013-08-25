Crafty.scene('sceneSickBay', function () {
  Crafty.background('rgb(127,127,127)');

  // Crafty.e('ExplodingPanel')
  //   .attr({x: 50, y: 100, explodeOnTick: 100, pieceNum: 10})
  //   .init2();

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Sick Bay');

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
  Crafty.e('ActionPoint, Editable')
    .attr({x: 12, y: 302, actions:
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
  Crafty.e('Portal, Editable')
    .attr({x: 657, y: 296, w: 20, h: 100})
    .color('rgb(24,24,24)')
    .setDestination('sceneHallway');

  // The Teleporter Portal
  if (A.portalActive) {
    Crafty.e('Portal')
      .attr({x: 84, y: 420, w: 40, h: 20})
      .color('rgb(24,224,224)')
      .setDestination('sceneEngineRoom');

    // The Teleporter Portal Lights TODO: NEEDS TO SPARKLE!!!!
    Crafty.e('2D, Canvas, Color')
      .attr({x: 84, y: 320, w: 40, h: 120})
      .color('rgba(24,24,224,150)');
  }

  // Player has highest Z
  Crafty.e('Player')
    .attr({x: 500, y: 320});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
