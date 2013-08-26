Crafty.c('Countdown', {
  init: function () {
    this.requires('2D, Canvas, Color')
      .color('rgb(22,22,22)')
      .attr(
        {
          x: 520,
          y: 30,
          w: 50,
          h: 40,
          z: 100,
          count: A.count,
          textObj: null,
          randShake: 150
        }
      )
      .bind('GameTick', this.handleGameTick)
      .bind('ResetTime', this.resetTime);

    this.textObj = Crafty.e('2D, Canvas, Color, Text')
      .color('rgb(223,223,223)')
      .attr({x: this.x + 10, y: this.y + 30, z: this.z + 1})
      .textColor('#ffffff')
      .textFont(
        {
          family: 'mono',
          size: '32px'
        }
      )
      .text(A.count);

    this.attach(this.textObj);
    this.border = Crafty.e('2D, Canvas, Color')
      .color('rgb(100,100,100)')
      .attr({x: this.x - 5, y: this.y - 5, w: this.w + 10, h: this.h + 10, z: this.z - 1});
    this.attach(this.border);

  },
  resetTime: function () {

    if (!A.diedOnce) {
      Crafty.scene('sceneInstructions');
    } else {
      Crafty.trigger('BigShake');
      Crafty.scene('sceneBridge');
    }

    A.count = 10;
    A.gameTick = 0;
    this.trigger('Change'); // hax for text

    // Reset "player reality"
    A.protected = false;
    A.portalActive = false;
    A.regulatorInPlace = false;
    // But A.foundManifest must stay true if true throughout lives
  },
  handleGameTick: function () {
    //console.log('gameTick: ' + A.gameTick + ' portalActiveTick: ' + A.portalActiveTick);

    if (A.gameTick === A.portalActiveTick) {
      A.portalActive = true;
      Crafty.trigger('PortalActive');
      A.portalActiveTick = 9999999999;
    }

    if (A.gameTick === A.regulatorInPlaceTick) {
      A.regulatorInPlace = true;
      Crafty.trigger('RegulatorInPlace');
      A.regulatorInPlaceTick = 9999999999;
    }

    if (A.gameTick % this.randShake === 0) {
      this.randShake = Math.random()*100 + 50;
      Crafty.trigger('SmallShake');
    }
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
