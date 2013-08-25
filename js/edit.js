Crafty.c('Editable', {
  init: function () {
    this.requires('Mouse, Keyboard')
      .bind('Click', this.handleClick);
  },
  handleClick: function () {
    this.redbox = Crafty.e('2D, Canvas, Color')
      .attr({
        x: this.x - 2,
        y: this.y - 2,
        w: this.w + 4,
        h: this.h + 4,
        z: this.z - 1
      })
      .color('rgb(255,0,0)');
    this.attach(this.redbox);
    console.log('redbox ', this.redbox);
    this.bind('KeyDown', this.handleKeyDown);
    this.unbind('Click', this.handleClick);
  },
  unEdit: function () {
    this.redbox.destroy();
    this.unbind('KeyDown', this.handleKeyDown);
    this.bind('Click', this.handleClick);
  },
  handleKeyDown: function () {
    var m;

    if (this.isDown('SHIFT')) {
      m = 10;
    } else {
      m = 1;
    }

    if (this.isDown('X')) {
      console.log(
        {
          x: this.x,
          y: this.y,
          w: this.w,
          h: this.h
        }
      );

      this.unEdit();
    }
    if (this.isDown('A')) {
      this.x -= 1 * m;
    }
    if (this.isDown('D')) {
      this.x += 1 * m;
    }
    if (this.isDown('W')) {
      this.y -= 1 * m;
    }
    if (this.isDown('S')) {
      this.y += 1 * m;
    }

    if (this.isDown('Z')) {
      this.w -= 1 * m;
    }
    if (this.isDown('C')) {
      this.w += 1 * m;
    }
    if (this.isDown('Q')) {
      this.h -= 1 * m;
    }
    if (this.isDown('E')) {
      this.h += 1 * m;
    }

    this.redbox.w = this.w + 4;
    this.redbox.h = this.h + 4;
  }
});
