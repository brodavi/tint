Crafty.c('Transition', {
  init: function () {
    this.requires('2D, Canvas, Color, Tween')
      .color('rgb(0,0,0)')
      .attr({x: 0, y: 0, w: 668, h: 500, z: 10000});

    var transitions =
          [
            {x: -668, y: 0},
            {x: 0, y: -500},
            {x: 668, y: 0},
            {x: 0, y: 500}
          ];

    var rand = transitions[(Math.floor(Math.random() * 4))];

    this.tween(rand, 20);
  }
});
