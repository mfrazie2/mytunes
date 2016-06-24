// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function (){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },
  dequeue: function (song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },
  enqueue: function (song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },
  playFirst: function (){
    this.at(0).play();
  },
  playNext: function () {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.stop();
    }
  },
  stop: function(){
    this.trigger('stop', this);
  }
});
