Crafty.c('Portal', {
  init: function () {
    this.requires('2D, Canvas, Collision, Editable');
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
