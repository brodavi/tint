Crafty.scene('sceneSickBay', function () {
  Crafty.background('rgb(127,127,127)');

  // Crafty.e('ExplodingPanel')
  //   .attr({x: 50, y: 100, explodeOnTick: 100, pieceNum: 10})
  //   .init2();

  Crafty.e('Transition');

  /**
   * Walls
   */
  // top
  Crafty.e('Wall')
    .attr({x: 10, y: 200, w: 650, h: 50});

  // left
  Crafty.e('Wall')
    .attr({x: 4, y: 230, w: 7, h: 256});

  // right
  Crafty.e('Wall')
    .attr({x: 658, y: 230, w: 7, h: 256});

  // bottom left
  Crafty.e('Wall')
    .attr({x: 9, y: 482, w: 272, h: 7});

  // bottom right
  Crafty.e('Wall')
    .attr({x: 386, y: 482, w: 272, h: 7});

  /**
   * Action Points
   */
  Crafty.e('ActionPoint, Editable')
    .setOrigin(
      {
        x: 12,
        y: 302,
        actions:
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
          }
        ]
      });

  // The Door
  Crafty.e('Door')
    .setOrigin(256, 402);

  // The Portal
  Crafty.e('Portal')
    .attr({x: 284, y: 490, w: 100, h: 20})
    .color('rgb(24,24,24)')
    .setDestination('sceneLift');

  // Player has highest Z
  Crafty.e('Player')
    .attr({x: 220, y: 320});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
