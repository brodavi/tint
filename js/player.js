// The Player COMPONENT
Crafty.c("Player", {
  init: function() {
    this.requires('2D, Canvas, Color, Collision, Multiway')
      .multiway(4, {
           UP_ARROW: -90,
           DOWN_ARROW: 90,
           LEFT_ARROW: 180,
           RIGHT_ARROW: 0
       })
      .color('rgb(20, 75, 40)')
      .attr({w: 25, h: 50})
      .onDoorHit()
      .stopOnSolids();
  },

  onDoorHit: function () {
    this.onHit('Door', function () {
      console.log('scene 2');
      Crafty.scene("Scene2");
    });
    return this;
  },

  // Registers a stop-movement function to be called when
  // this entity hits an entity with the "Solid" component
  stopOnSolids: function () {
    this.onHit('Solid', this.stopMovement);
    return this;
  },
 
  // Stops the movement
  stopMovement: function () {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  }
});
