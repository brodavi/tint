Crafty.c('Countdown', {
  init: function () {
    this.requires('2D, Canvas, Color')
      .color('rgb(23,72,34)')
      .attr(
        {
          x: 520,
          y: 30,
          w: 50,
          h: 40,
          count: A.count,
          textObj: null
        }
      )
      .bind('GameTick', this.handleGameTick)
      .bind('ResetTime', this.resetTime);

    this.textObj = Crafty.e('2D, Canvas, Color, Text')
      .color('rgb(23,23,23)')
      .attr({x: this.x + 10, y: this.y + 30})
      .textFont(
        {
          family: 'mono',
          size: '30px'
        }
      )
      .text(A.count);

    this.attach(this.textObj);
  },
  resetTime: function () {
    Crafty.trigger('BigShake');
    Crafty.scene('sceneBridge');
    A.count = 10;
    this.trigger('Change'); // hax for text

    // Reset "player reality"
    A.protected = false;
    A.portalActive = false;
    // But A.foundManifest must stay true if true throughout lives
  },
  handleGameTick: function () {
    if (A.gameTick % 65 === 0) {
      A.count -= 1;
      this.textObj.text('' + A.count);
      this.trigger('Change');
      if (A.count === 0) {
        this.resetTime();
      }
    }
  }
});
