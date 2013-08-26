Crafty.scene('sceneBridge', function () {
  Crafty.background('rgb(127,127,127)');

  // Crafty.e('ExplodingPanel')
  //   .attr({x: 50, y: 100, explodeOnTick: 100, pieceNum: 10})
  //   .init2();

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Bridge');

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

  // right
  Crafty.e('Wall')
    .attr({x: 658, y: 230, w: 7, h: 256})
    .color('rgb(46,46,46)');

  // bottom left
  Crafty.e('Wall')
    .attr({x: 9, y: 482, w: 272, h: 7})
    .color('rgb(46,46,46)');

  // bottom right
  Crafty.e('Wall')
    .attr({x: 386, y: 482, w: 272, h: 7})
    .color('rgb(46,46,46)');

  /**
   * Action Points
   */
  Crafty.e('ActionPoint')
    .attr({x: 12, y: 302, actions:
        [
          {
            actionText: 'Scan Anomaly',
            response: 'Sensors are not operational'
          },
          {
            actionText: 'Engage Warp Drive',
            response: 'Engine is offline'
          },
          {
            actionText: 'Eject Warp Core',
            response: 'Warp core ejection system offline'
          },
          {
            actionText: 'Show Map',
            response: '',
            obj: 'Map'
          }
        ]
      })
    .animate();

  // The Door
  Crafty.e('DoorUpDown')
    .setOrigin(256, 402);

  // The Portal
  Crafty.e('Portal')
    .attr({x: 284, y: 490, w: 100, h: 20})
    .setDestination('sceneHallway');

  Crafty.e('Player')
    .attr({x: 220, y: 320, z: 1000});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
