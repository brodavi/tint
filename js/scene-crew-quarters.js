Crafty.scene('sceneCrewQuarters', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  /**
   * Walls
   */
  // top
  Crafty.e('Wall')
    .attr({x: 0, y: 100, w: 750, h: 150})
    .color('rgb(46,46,46)');

  // bottom
  Crafty.e('Wall')
    .attr({x: 0, y: 447, w: 680, h: 57})
    .color('rgb(46,46,46)');

  /**
   * Action Points
   */
  Crafty.e('ActionPoint')
    .attr({x: 342, y: 402, actions:
           [
             {
               actionText: 'Sleep',
               response: 'You Dream of a backwards-speaking man',
               result: function () {
                 Crafty.trigger('ResetTime');
               }
             }
           ]
          })
    .animate();

  // The Left Door Portal
  Crafty.e('Portal')
    .attr({x: -15, y: 251, w: 20, h: 194})
    .setDestination('sceneHallway');

  // The Left Door
  Crafty.e('DoorLeftRight')
    .setOrigin(-60, 270);

  // The Right Door Portal
  Crafty.e('Portal')
    .attr({x: 661, y: 251, w: 20, h: 194})
    .setDestination('sceneCargoBay');

  // The Right Door
  Crafty.e('DoorLeftRight')
    .setOrigin(580, 270);

  // Player has highest Z
  if (A.comingFrom === 'sceneHallway'){
    Crafty.e('Player')
      .attr({x: 50, y: 350});  
  } else {
    Crafty.e('Player')
      .attr({x: 630, y: 350});
  }

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

  Crafty.e('Title')
    .setText('Crew Quarters');

  A.comingFrom = 'sceneCrewQuarters';

});
