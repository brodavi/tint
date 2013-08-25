Crafty.c('ActionItem', {
  init: function () {
    this.requires('2D, Canvas, Color, Keyboard, Text')
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

      console.log('response: ' + this.response);
      Crafty.e('ResponseNotification')
        .text(this.response);
    }
  }
});

Crafty.c('ResponseNotification', {
  init: function () {
    this.requires('2D, Canvas, Color, Keyboard')
      .color('rgb(72,94,38)')
      .attr(
        {
          x: 120,
          y: 120,
          w: 200,
          h: 50
        }
      );
    this.bind('KeyDown', function () {
      Crafty.trigger('Dismiss');
      this.destroy();
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

Crafty.c('ActionPanel', {
  init: function () {
    this.requires('2D, Canvas, Color, Keyboard, Tween')
      .color('rgb(158,120,150)')
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
              y: this.y + 20 + i * 20,
              actionText: actions[i].actionText,
              response: actions[i].response
            }
          );

      // set the text
      actionItem.text(actions[i].actionText);

      this.actionItems.push(actionItem);
      this.attach(actionItem);
    }

    return this;
  }
});

Crafty.c('ActionPoint', {
  init: function () {
    this.requires('2D, Canvas, Color, Collision')
      .bind('ActionPoint', this.showActions);
    return this;
  },
  actions: function (actions) {
    this.actions = actions;
  },
  showActions: function () {
    Crafty.trigger('BigShake');
    Crafty.e('ActionPanel').setActions(this.actions);
  }
});

