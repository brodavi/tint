Crafty.scene('sceneSplashScreen', function () {

  Crafty.background('rgb(0,0,0)');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 100, y: 140})
    .textFont({family: 'mono', size: '45px'})
    .textColor('#eeeeee', 1)
    .text('There Is No Time');

  Crafty.e('2D, Canvas, Color, Mouse, Keyboard')
    .attr({x: 250, y: 300, w: 120, h: 50})
    .color('rgb(120,120,120)')
    .attach(
      Crafty.e('2D, Canvas, Text')
        .attr({x: 253, y: 340})
        .textFont({family: 'mono', size: '45px'})
        .text('Play')
        
    )
    .bind('KeyDown', function () {
      Crafty.trigger('ResetTime');
      Crafty.scene('sceneStory');
    })
    .bind('Click', function () {
      Crafty.scene('sceneStory');
    });

  // var t1 = Crafty.e('LetterPiece, Editable')
  //       .color('rgb(50,50,50)')
  //       .attr({x: Math.random()*500,
  //              y: Math.random()*300,
  //              w: Math.random()*100,
  //              h: Math.random()*100,
  //              finalX: 40,
  //              finalY: 168,
  //              finalW: 30,
  //              finalH: 8})
  //       .setBorder()
  //       .tween({x:this.finalX,y:this.finalY,w:this.finalW,h:this.finalH}, 60);
});

Crafty.c('LetterPiece', {
  init: function () {
    this.requires('2D, Canvas, Color, Tween');
    return this;
  },
  setBorder: function () {
    this.border = Crafty.e('2D, Canvas, Color, Tween')
      .color('rgb(100,100,100)')
      .attr({x: this.x - 1,
             y: this.y - 1,
             w: this.w + 2,
             h: this.h + 2,
             z: this.z - 1
            });
    this.attach(this.border);
    return this;
  }
});
