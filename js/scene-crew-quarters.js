Crafty.scene('sceneCrewQuarters', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  Crafty.e('ResponseNotification')
    .text('Crew Quarters');

  /**
   * Walls
   */
  // top
  Crafty.e('Wall')
    .attr({x: 10, y: 200, w: 650, h: 50})
    .color('rgb(46,46,46)');

  // left top
  Crafty.e('Wall')
    .attr({x: 4, y: 230, w: 7, h: 80})
    .color('rgb(46,46,46)');

  // left bottom
  Crafty.e('Wall')
    .attr({x: 4, y: 380, w: 7, h: 110})
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
    .attr({x: 342, y: 102, actions:
           [
             {
               actionText: 'Sleep',
               response: 'You Dream of a backwards-speaking man',
               result: function () {
                 Crafty.trigger('ResetTime');
               }
             }
           ]
          });

  // The Left Door Portal
  Crafty.e('Portal, Editable')
    .attr({x: -12, y: 296, w: 20, h: 100})
    .color('rgb(24,24,24)')
    .setDestination('sceneCrewQuarters');

  // The Left Door
  Crafty.e('DoorLeftRight')
    .setOrigin(-60, 270);

  // The Right Door Portal
  Crafty.e('Portal, Editable')
    .attr({x: 657, y: 296, w: 20, h: 100})
    .color('rgb(24,24,24)')
    .setDestination('sceneCargoBay');

  // The Right Door
  Crafty.e('DoorLeftRight')
    .setOrigin(580, 270);

  // Player has highest Z
  Crafty.e('Player')
    .attr({x: 500, y: 320});

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
