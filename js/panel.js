Crafty.c('Panel', {
  init: function () {
    this.requires('2D, Canvas, Color');
  },
  set: function () {
    this.attach(Crafty.e('2D, Canvas, Color, Collision, Solid')
                .color('rgb(66,66,66)')
                .attr({x: this.x-20, y: this.y-20, w: 55, h: 130}));
    this.attach(Crafty.e('2D, Canvas, Color')
                .color('rgb(46,46,46)')
                .attr({x: this.x-20, y: this.y-20, w: 60, h: 120}));
    this.attach(Crafty.e('2D, Canvas, Color')
                .color('rgb(26,26,26)')
                .attr({x: this.x, y: this.y, w: 30, h: 40}));
    this.attach(Crafty.e('2D, Canvas, Color')
                .color('rgb(76,76,76)')
                .attr({x: this.x, y: this.y + 50, w: 30, h: 20}));
    this.attach(Crafty.e('2D, Canvas, Color')
                .color('rgb(76,176,76)')
                .attr({x: this.x + 5, y: this.y + 55, w: 5, h: 5}));
    this.attach(Crafty.e('2D, Canvas, Color')
                .color('rgb(76,196,76)')
                .attr({x: this.x + 15, y: this.y + 55, w: 5, h: 5}));
    return this;
  }
});
