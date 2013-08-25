Crafty.scene('sceneCargoBay', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Cargo Bay');

  /**
   * Walls
   */
  // top
  Crafty.e('Wall')
    .attr({x: 10, y: 20, w: 650, h: 50})
    .color('rgb(46,46,46)');

  // left top
  Crafty.e('Wall')
    .attr({x: 4, y: 20, w: 7, h: 180})
    .color('rgb(46,46,46)');

  // left bottom
  Crafty.e('Wall')
    .attr({x: 4, y: 300, w: 7, h: 190})
    .color('rgb(46,46,46)');

  // left top
  Crafty.e('Wall')
    .attr({x: 4, y: 20, w: 7, h: 180})
    .color('rgb(46,46,46)');

  // left bottom
  Crafty.e('Wall')
    .attr({x: 4, y: 300, w: 7, h: 190})
    .color('rgb(46,46,46)');

  // right
  Crafty.e('Wall')
    .attr({x: 658, y: 20, w: 7, h: 466});

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
    .attr({x: 542, y: 242, actions:
           [
             {
               actionText: 'Examine Equipment',
               response: 'This is the HyperDrive Regulator!',
               response2: 'Transport it to the engine room!',
               result: function() {
                 A.foundManifest = true;
               }
             }
           ]
          })
    .animate();

  // The Door Portals
  Crafty.e('Portal, Editable')
    .attr({x: -2, y: 200, w: 10, h: 100})
    .color('rgb(24,24,24)')
    .setDestination('sceneCrewQuarters');

  Crafty.e('Portal, Editable')
    .attr({x: 284, y: 490, w: 100, h: 20})
    .color('rgb(24,24,24)')
    .setDestination('sceneEngineRoom');

  // The Doors
  Crafty.e('DoorUpDown')
    .setOrigin(256, 420);
  Crafty.e('DoorLeftRight')
    .setOrigin(-69, 172);

  // Player has highest Z
  Crafty.e('Player')
    .attr({x: 220, y: 320});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
