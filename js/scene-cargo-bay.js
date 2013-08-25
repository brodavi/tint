Crafty.scene('sceneCargoBay', function () {
  Crafty.background('rgb(127,127,127)');

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
    .attr({x: 12, y: 302, actions:
           [
             {
               actionText: 'Examine Manifest',
               response: 'There\'s a HyperDrive Regulator on board!',
               response2: 'Transport it to the engine room!',
               result: function() {
                 console.log('A: ' + A);
                 A.foundManifest = true;
               }
             }
           ]
          })
    .animate();

  // The Doors
  Crafty.e('DoorUpDown')
    .setOrigin(256, 42);
  Crafty.e('DoorLeftRight')
    .setOrigin(-75, 172);
  Crafty.e('DoorLeftRight')
    .setOrigin(586, 172);

  // The Portal
  Crafty.e('Portal')
    .attr({x: 284, y: 90, w: 100, h: 20})
    .color('rgb(24,24,24)')
    .setDestination('sceneBridge');

  // Player has highest Z
  Crafty.e('Player')
    .attr({x: 220, y: 320});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
