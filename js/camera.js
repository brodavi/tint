Crafty.c('CameraShake', {
  init: function () {
    this.attr({_shake: false, _shakecount: 0})
      .bind('BigShake', function() {
        this._shake = true;
        this._shakecount = 0;
        this._shakemod = 3;
        this._shakelength = 10;
        this._amplitude = 10;
        return this;
      })
      .bind('SmallShake', function() {
        this._shake = true;
        this._shakecount = 0;
        this._shakemod = 2;
        this._shakelength = 5;
        this._amplitude = 5;
        return this;
      })
      .bind('GameTick', function() {
        if (!this._shake) {
          return this;
        }
        if (A.gameTick % this._shakemod !== 0) {
          return this;
        }

        Crafty.viewport.x = Crafty.math.randomInt(-this._amplitude, this._amplitude);
        Crafty.viewport.y = Crafty.math.randomInt(-this._amplitude, this._amplitude);

        this._shakecount += 1;

        if (this._shakecount > this._shakelength) {
          this._shakecount = 0;
          this._shake = false;
          Crafty.viewport.x = 0;
          Crafty.viewport.y = 0;
        }

        return this;
      });

    return this;
  }
});
