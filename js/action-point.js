Crafty.c('ResponseNotification', {
  init: function () {
    this.requires('2D, Canvas, Color, Keyboard')
      .color('rgb(172,172,172)')
      .attr(
        {
          x: 120,
          y: 80,
          w: 200,
          h: 50
        }
      );
    this.attach(Crafty.e('2D, Canvas, Color')
                .attr({x: 130, y: 90, w: 180, h: 30})
                .color('rgb(150,150,150)'));
    this.bind('KeyDown', function () {
      if (this.isDown('SPACE')) {
        Crafty.trigger('Dismiss');
        this.destroy();
      }
    });
  },
  text: function (text) {
    var textObj = Crafty.e('2D, Canvas, Text')
          .attr(
            {
              x: this.x + 10,
              y: this.y + 10,
              h: 20
            }
          )
          .textFont(
            {
              family: 'mono',
              size: '20px'
            }
          )
          .text(text)
          .bind('Dismiss', this.destroy);

    this.w = text.length * 12 + 20;
  }
});

Crafty.c('ActionItem', {
  init: function () {
    this.requires('2D, Canvas, Color, Keyboard, Text')
      .textFont({family: 'mono', size: '15px'})
      .attr(
        {
          actionText: null,
          response: null,
          w: 250,
          h: 15
        }
      )
      .color('rgb(123,123,123)');

    this.bind('KeyDown', this.handleKeyDown);
    this.bind('SelectionMade', this.destroy);
  },
  activate: function () {
    this.selected = true;
    this.color('rgb(255,255,255)');
  },
  deactivate: function () {
    this.selected = false;
    this.color('rgb(123,123,123)');
  },
  handleKeyDown: function () {
    if (this.isDown('SPACE') &&
        this.selected) {
      Crafty.trigger('SelectionMade');


      /**
       * DO THE ACTION
       */
      if (this.result) {
        this.result();
      }
      if (!this.obj) { // map and transporter tool
        if (this.response) {
          Crafty.e('ResponseNotification')
          .text(this.response);
        }
        if (this.response2) {
          Crafty.e('ResponseNotification')
            .attr({y: 240})
            .text(this.response2);
        }
      } else {
        Crafty.e(this.obj);
      }
    }
  }
});

Crafty.c('ActionPanel', {
  init: function () {
    this.requires('2D, Canvas, Color, Keyboard, Tween')
      .color('rgb(150,150,150)')
      .attr(
        {
          x: 100,
          y: 100,
          w: 300,
          h: 300,
          indexActive: 0,
          actionItems: []
        }
      );

    this.attach(Crafty.e('2D, Canvas, Color')
                .color('rgb(90,90,90)')
                .attr({x: this.x+5, y: this.y+5, w: this.w -10, h: this.h-10}));

    this.bind('SelectionMade', this.destroy);
    this.bind('KeyDown', this.handleKeyDown);

    return this;
  },
  handleKeyDown: function () {

    if (this.isDown('UP_ARROW')) {
      this.actionItems[this.indexActive].deactivate();
      this.indexActive -= 1;
      if (this.indexActive === -1) {
        this.indexActive = 0;
      }
      this.actionItems[this.indexActive].activate();
    }

    if (this.isDown('DOWN_ARROW')) {
      this.actionItems[this.indexActive].deactivate();
      this.indexActive += 1;
      if (this.indexActive === this.actionItems.length) {
        this.indexActive = this.actionItems.length-1;;
      }
      this.actionItems[this.indexActive].activate();
    }
  },
  setActions: function (actions) {

    this.actions = actions;

    for ( var i in actions ) {

      var actionItem = Crafty.e('ActionItem')
          .attr(
            {
              x: this.x + 20,
              y: this.y + 20 + i * 30,
              actionText: actions[i].actionText,
              response: actions[i].response,
              response2: actions[i].response2,
              obj: actions[i].obj,
              result: actions[i].result
            }
          );

      // set the text
      actionItem.text(actions[i].actionText);

      actionItem.width = actions[i].actionText * 20;

      this.actionItems.push(actionItem);

      this.attach(actionItem);
    }

    this.actionItems[0].activate();

    this.trigger('Change');
    return this;
  }
});

Crafty.c('FlashingPoint', {
  init: function () {
    this.requires('2D, Canvas, Color, Tween')
      .attr({w: 20, h: 20, big: false, alpha: 0.5 })
      .bind('TweenEnd', this.animate)
      .color('rgb(34,63,172)');

    return this;
  },
  animate: function () {
    this.big = Math.abs(this.x - this.bigX) < 2;

    if (this.big) {
      this.tween({x: this._parent.x, y: this._parent.y, w: this.origW, h: this.origH}, 22);
    } else {
      this.tween({x: this.bigX, y: this.bigY, w: this.bigW, h: this.bigH}, 22);
    }
    return this;
  },
  init2: function () {
    this.attr({origW: this.w, origH: this.h, bigX: this.x - 10, bigY: this.y - 10, bigW: this.w + 30, bigH: this.h + 30});
    return this;
  }

});

Crafty.c('ActionPoint', {
  init: function () {
    this.requires('2D, Collision')
      .attr({w: 40, h: 40})
      .bind('ActionPoint', this.showActions);

    return this;
  },
  animate: function () {
    this.attach(
      Crafty.e('FlashingPoint')
        .attr({x: this.x, y: this.y})
        .init2()
        .animate()
    );
    return this;
  },
  showActions: function () {
    Crafty.e('ActionPanel').setActions(this.actions);
  }
});

