App.Views.Player = Backbone.View.extend({
  className: "player",
  template: App.Templates.player,

  events: {
    "tap .increment-by-1": "handleIncrementByOneTap",
    "tap .increment-by-5": "handleIncrementByFiveTap",
    "tap .decrement-by-1": "handleDecrementByOneTap",
    "tap .decrement-by-5": "handleDecrementByFiveTap",
    "swipeLeft": "handleSwipeLeft"
  },

  initialize: function() {
    _.bindAll(this,
      "handleIncrementByOneTap",
      "handleIncrementByFiveTap",
      "handleDecrementByOneTap",
      "handleDecrementByFiveTap",
      "handleSwipeLeft");
    this.$el.attr("id", "player-" + this.model.id);
  },

  render: function() {
    this.$el.html(this.template({ player: this.model }));
    this.cacheElements();
    this.setHeight();
    return this.$el;
  },

  cacheElements: function() {
    this.lifeCounter = this.$el.find(".life");
    this.buttons = this.$el.find(".player-button");
    this.incrementByOne = this.$el.find(".increment-by-one");
  },

  updateLife: function() {
    this.lifeCounter.html(this.model.get("life"));
  },

  setHeight: function(height) {
    this.$el.css("height", height);
    this.lifeCounter.css({
      "height": height,
      "line-height": height + "px"
    });
    this.buttons.css({
      "height": (height / 2) - 1,
      "line-height": ((height / 2) - 1) + "px"
    });
  },

  handleIncrementByOneTap: function() {
    this.model.set("life", this.model.get("life") + 1);
    this.updateLife();
  },

  handleIncrementByFiveTap: function() {
    this.model.set("life", this.model.get("life") + 5);
    this.updateLife();
  },

  handleDecrementByOneTap: function() {
    this.model.set("life", this.model.get("life") - 1);
    this.updateLife();
  },

  handleDecrementByFiveTap: function() {
    this.model.set("life", this.model.get("life") - 5);
    this.updateLife();
  },

  handleSwipeLeft: function() {
    alert("swip left");
  }
});