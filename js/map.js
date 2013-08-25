Crafty.c('Map', {
  init: function () {
    this.requires('2D, Canvas, Color')
      .color('rgb(228,228,217)')
      .attr({x: 100, y: 100, w: 450, h: 300})
      .bind('KeyDown', function () {
        Crafty.trigger('Dismiss');
        this.destroy();
      })

    // bridge
      .attach(Crafty.e('2D, Canvas, Color, Editable')
              .color('rgb(20,20,20)')
              .attr({x: 290, y: 130, w: 60, h: 40, z: 900}))

    // 1 away down Cargo Bay
      .attach(Crafty.e('2D, Canvas, Color, Editable')
              .color('rgb(20,20,20)')
              .attr({x: 290, y: 180, w: 60, h: 40, z: 900}))

    // 2 away right Transporter Room
      .attach(Crafty.e('2D, Canvas, Color, Editable')
              .color('rgb(20,20,20)')
              .attr({x: 365, y: 180, w: 60, h: 40, z: 900}))

    // 2 away left Sick Bay
      .attach(Crafty.e('2D, Canvas, Color, Editable')
              .color('rgb(20,20,20)')
              .attr({x: 217, y: 180, w: 60, h: 40, z: 900}))

    // 3 away Crew Quarters
      .attach(Crafty.e('2D, Canvas, Color, Editable')
              .color('rgb(20,20,20)')
              .attr({x: 140, y: 180, w: 60, h: 40, z: 900}))

    // 4 away Engine Room
      .attach(Crafty.e('2D, Canvas, Color, Editable')
              .color('rgb(20,20,20)')
              .attr({x: 140, y: 230, w: 60, h: 40, z: 900}));
  }
});
