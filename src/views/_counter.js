App.Views.Counter = Backbone.View.extend({
  events: {
    "swipeDown": "handleSwipeDown"
  },

  initialize: function() {
    _.bindAll(this, "createPlayerView", "renderPlayerView");
    this.playerViews = [];
    this.emptyTemplate = this.emptyTemplate || _.template('<p>There are no Players</p>');
    this.render();
  },

  render: function() {
    this.$el.empty();
    if (this.collection.isEmpty()) {
      this.$el.html(this.emptyTemplate());
    } else {
      this.createPlayerViews();
      this.renderPlayerViews();
    }
    return this.$el;
  },

  createPlayerView: function(model, index) {
    this.playerViews.push(new App.Views.Player({ model: model, index: index }));
  },

  renderPlayerView: function(playerView) {
    this.$el.append(playerView.render());
    playerView.setHeight(this.$el.height() / 2);
  },

  createPlayerViews: function() {
    this.playerViews.length = 0;
    this.collection.each(this.createPlayerView);
  },

  renderPlayerViews: function() {
    this.playerViews.each(this.renderPlayerView);
  },

  handleSwipeDown: function() {
    alert("swipeDown");
  }
});