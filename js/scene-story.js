Crafty.scene('sceneStory', function () {

  Crafty.background('rgb(0,0,0)');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 40})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('In the distant future, all of Earth\'s Peoples');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 60})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('learned to live in peace together.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 90})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('We met other civilizations, and helped to form');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 110})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('the Galactic Cooperative.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 140})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('Now in the last days of the galaxy, the Galactic');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 160})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('Cooperative has dispatched the science vessel');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 180})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('"Granger One" to explore a region of space thought');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 200})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('to harbor Einstein–Rosen Bridge structures of');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 220})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('unusual size.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 250})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('You are Captain Sinclair, in command of the');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 270})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('"Granger One", and your ship is being torn');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 290})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('apart by this strange area of space.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 320})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('Your ship will be destroyed in 10 seconds.');

  Crafty.e('2D, Canvas, Color, Mouse, Keyboard')
    .attr({x: 230, y: 400, w: 260, h: 50})
    .color('rgb(120,120,120)')
    .attach(
      Crafty.e('2D, Canvas, Text')
        .attr({x: 233, y: 440})
        .textFont({family: 'mono', size: '45px'})
        .text('Good Luck')
        
    )
    .bind('KeyDown', function () {
      Crafty.trigger('ResetTime');
      Crafty.scene('sceneBridge');
    })
    .bind('Click', function () {
      Crafty.scene('sceneBridge');
    });

});
