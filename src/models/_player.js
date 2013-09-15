App.Models.Player = Backbone.Model.extend({
  defaults: {
    life: 20
  }
});
App.Collections.Players = Backbone.Collection.extend({ model: App.Models.Player, url: "#" });