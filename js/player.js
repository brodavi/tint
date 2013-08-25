Crafty.c('Leg', {
  init: function () {
    this.requires('2D, Canvas, Color, Rotate, Editable')
      .color('rgb(100, 30, 30)')
      .attr(
        {
          originX: this.x,
          originY: this.y,
          x: this.x - 10,
          y: this.y - 35,
          w: 20,
          h: 40,
          rotation: 0,
          orient: -1 // left
        }
      )
      .origin(this.originX, this.originY)
      .attach(Crafty.e('2D, Canvas, Color')
             .color('rgb(0,0,255)')
             .attr({ x: this.originX,
                     y: this.originY,
                     w: 2,
                     h: 2}))
      .bind('WalkingLeft', this.handleWalkingLeft)
      .bind('WalkingRight', this.handleWalkingRight);
    return this;
  },
  set: function (orient) {
    this.orient = orient;
    return this;
  },
  handleWalkingLeft: function (dir) {
    this.rotation = Math.sin(A.gameTick * 0.2) * this.orient * 45 - 15;
  },
  handleWalkingRight: function (dir) {
    this.rotation = Math.sin(A.gameTick * 0.2) * this.orient * 45 + 15;
  }
});

Crafty.c('PlayerBody', {
  init: function () {
    this.requires('2D, Canvas, Color, Editable')
      .color('rgb(20, 75, 40)')
      .attr(
        {
          x: this.x - 15,
          y: this.y - 80,
          w: 30,
          h: 50
        }
      );
  }
});

// The Player COMPONENT
Crafty.c('Player', {
  init: function() {
    this.requires('2D, Canvas, Color, Collision, Multiway')
      .multiway(3, {
           UP_ARROW: -90,
           DOWN_ARROW: 90,
           LEFT_ARROW: 180,
           RIGHT_ARROW: 0
       })
      .color('rgb(255, 0, 0)')
      .attr({w: 1, h: 1});

    this.attach(Crafty.e('PlayerBody'));
    this.attach(Crafty.e('Leg').set(1).attr({z: this.z - 1}));
    this.attach(Crafty.e('Leg').set(-1));

    this.onHit('Door', function () {
      Crafty.scene('sceneLift');
    });

    this.onHit('Solid', this.stopMovement);

    this.onHit('ActionPoint', this.enteredActionPoint);
    this.bind('Dismiss', this.leftActionPoint);
    this.bind('Moved', this.walking);
  },
  enteredActionPoint: function () {
    Crafty.trigger('ActionPoint');
    this.stopMovement();
    this.disableControl();
  },
  leftActionPoint: function () {
    this.enableControl();
  },
  // Stops the movement
  stopMovement: function () {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  },
  walking: function (evt) {
    if (evt.x - this.x < 0 ||
        evt.y - this.y < 0) {
      Crafty.trigger('WalkingRight');
    }
    if (evt.x - this.x > 0 ||
        evt.y - this.y > 0) {
      Crafty.trigger('WalkingLeft');
    }
  }
});
