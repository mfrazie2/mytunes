// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  
  initialize: function() {
    this.render();
    // listen for an add event, then render the section
    // listen for a remove event, then render the section    
    this.collection.on('add remove', function() {this.render();}, this);
  },
  
  // events: {
  //   'add': function() {
  //     this.render();
  //   }
  // },
  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
