Crafty.c('Portal', {
  init: function () {
    this.requires('2D, Collision');
  },
  setDestination: function (scene) {
    this.scene = scene;
    this.onHit('Player', this.handleTouched);
    return this;
  },
  handleTouched: function () {
    Crafty.scene(this.scene);
  }
});
