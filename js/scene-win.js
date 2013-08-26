Crafty.scene('sceneWin', function () {

  Crafty.background('rgb(0,0,0)');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 40})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('You are dead. But you saved your crew. So it goes.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 140, y: 70})
    .textFont({family: 'italic', size: '19px'})
    .textColor('#eeeeee', 1)
    .text(' - I always thought I didn\'t have time. -');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 110})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('There is no time.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 140, y: 140})
    .textFont({family: 'italic', size: '19px'})
    .textColor('#eeeeee', 1)
    .text('- I don\'t understand - ');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 180})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('You will see.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 140, y: 200})
    .textFont({family: 'italic', size: '19px'})
    .textColor('#eeeeee', 1)
    .text(' - Who are you, anyway? - ');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 240})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('We are you...');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 40, y: 280})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('Now go, explorer. There is a universe to see.');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 240, y: 380})
    .textFont({family: 'mono', size: '20px'})
    .textColor('#eeeeee', 1)
    .text('Take your time.');
});
