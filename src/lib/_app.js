App.initialize = function() {
  this.players = new App.Collections.Players([{ id: 1 }, { id: 2 }]);
  this.counterView = new App.Views.Counter({
    el: "#container",
    collection: this.players
  });
};

App.initialize();