Crafty.scene("sceneLift", function () {
  Crafty.background("#EEE");

  Crafty.e("Player")
    .attr({x: 100, y: 100});

  Crafty.e("2D, Canvas, Color, Collision, Solid, Wall")
    .attr({x: 10, y: 50, w: 5, h: 150})
    .color("rgb(0,124,124)");

  Crafty.e("2D, Canvas, Color, Collision, Solid, Door")
    .attr({x: 150, y: 50, w: 50, h: 60})
    .color("rgb(24,24,24)");

  // Gotta have the countdown on each scene?
  Crafty.e('Countdown');

});
