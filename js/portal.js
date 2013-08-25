Crafty.c('Portal', {
  init: function () {
    this.requires('2D, Canvas, Color, Collision')
      .color('rbg(72,85,21)');
  },
  setDestination: function (scene) {
    this.scene = scene;
    this.onHit('Player', this.handleTouched);
  },
  handleTouched: function () {
    Crafty.scene(this.scene);
  }
});
