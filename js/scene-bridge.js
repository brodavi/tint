Crafty.scene("sceneBridge", function () {
  Crafty.background("#FFF");

  Crafty.e("Player")
    .attr({x: 20, y: 20});

  Crafty.e("ExplodingPanel")
    .attr({x: 50, y: 100, explodeOnTick: 10000})
    .addPieces();

  Crafty.e("2D, Canvas, Color, Collision, Solid, Wall")
    .attr({x: 10, y: 50, w: 5, h: 150})
    .color("rgb(0,124,124)");

  Crafty.e("2D, Canvas, Color, Collision, Solid, Door")
    .attr({x: 150, y: 50, w: 50, h: 60})
    .color("rgb(24,24,24)");

});

