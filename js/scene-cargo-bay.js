Crafty.scene('sceneCargoBay', function () {
  Crafty.background('rgb(127,127,127)');

  Crafty.e('Transition');

  /**
   * Walls
   */
  // top
  Crafty.e('Wall')
    .attr({x: 0, y: 0, w: 680, h: 150})
    .color('rgb(46,46,46)');

  // left bottom
  Crafty.e('Wall')
    .attr({x: 0, y: 349, w: 27, h: 200})
    .color('rgb(46,46,46)');

  // right
  Crafty.e('Wall')
    .attr({x: 638, y: 20, w: 37, h: 457});

  // bottom left
  Crafty.e('Wall')
    .attr({x: 0, y: 472, w: 229, h: 28});

  // bottom right
  Crafty.e('Wall')
    .attr({x: 434, y: 474, w: 232, h: 27});

  /**
   * Action Points
   */
  var ap = Crafty.e('ActionPoint')
    .attr({actions:
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
          });

  // The Regulator
  var regulator = Crafty.e('2D, Canvas')
        .attr({x: 470, y: 280});

  regulator
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(30,30,30)')
        .attr({x: regulator.x-2, y: regulator.y-2, w: 104, h: 54})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(90,90,90)')
        .attr({x: regulator.x, y: regulator.y, w: 100, h: 50})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(40,40,40)')
        .attr({x: regulator.x + 25, y: regulator.y + 20, w: 60, h: 10})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(40,40,40)')
        .attr({y: regulator.y + 5, x: regulator.x + 50, w: 10, h: 30})
    )
    .attach(
      Crafty.e('2D, Canvas, Color')
        .color('rgb(40,40,40)')
        .attr({y: regulator.y + 15, x: regulator.x + 30, w: 10, h: 30})
    )
    .attach(ap.attr({x: regulator.x + 30, y: regulator.y + 10}).animate());

  if (A.regulatorInPlace) {
    regulator.y = 9999;
  } else {
    regulator.y = 280;
  }

  this.bind('RegulatorInPlace', function () {
    regulator.y = 9999;
    regulator.trigger('Change');
  });

  // The Door Portals
  Crafty.e('Portal, Editable')
    .attr({x: -11, y: 137, w: 14, h: 242})
    .setDestination('sceneCrewQuarters');

  Crafty.e('Portal, Editable')
    .attr({x: 231, y: 493, w: 204, h: 24})
    .setDestination('sceneEngineRoom');

  // The Doors
  Crafty.e('DoorUpDown')
    .setOrigin(256, 420);
  Crafty.e('DoorLeftRight')
    .setOrigin(-69, 172);

  if (A.comingFrom === 'sceneCrewQuarters') {
    Crafty.e('Player')
      .attr({x: 50, y: 250});
  } else if (A.comingFrom === 'sceneEngineRoom') {
    Crafty.e('Player')
      .attr({x: 220, y: 420});
  }

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

  Crafty.e('Title')
    .setText('Cargo Bay');


  A.comingFrom = 'sceneCargoBay';

});
