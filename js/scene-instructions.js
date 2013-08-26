Crafty.scene('sceneInstructions', function () {

  A.diedOnce = true;

  Crafty.background('rgb(0,0,0)');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 190})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('You are dead.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 140, y: 220})
    .textFont({family: 'italic', size: '19px'})
    .textColor('#eeeeee', 1)
    .text(' - where ... where am I? -');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 260})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('You have been gifted with Time Freedom.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 140, y: 290})
    .textFont({family: 'italic', size: '19px'})
    .textColor('#eeeeee', 1)
    .text('- I don\'t understand - ');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 330})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('As you loop through time, your actions in the');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 350})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('previous loop will happen "again".');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 420})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('Save your crew.');

  Crafty.e('2D, Canvas, Color, Mouse, Keyboard')
    .attr({x: 330, y: 400, w: 130, h: 50})
    .color('rgb(120,120,120)')
    .attach(
      Crafty.e('2D, Canvas, Text')
        .attr({x: 333, y: 440})
        .textFont({family: 'mono', size: '45px'})
        .text('Loop')
    )
    .bind('KeyDown', function () {
      Crafty.trigger('ResetTime');
      Crafty.scene('sceneBridge');
    })
    .bind('Click', function () {
      Crafty.trigger('ResetTime');
      Crafty.scene('sceneBridge');
    });

});
