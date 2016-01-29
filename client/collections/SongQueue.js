// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('remove', function() {
    });
    this.on('ended', this.playNext, this);
    // hears an 'ended'
      // play next
    
    
    // ;
    // ;this.add(song)
  },
  
  dequeue: function() {},
  
  enqueue: function (song) {
    if(this.length === 1) {
      this.playFirst();
    }
  },
  
  playFirst: function(){
    return this.at(0).play();
  },
  
  playNext: function() {
    this.shift();
    if(this.length >= 1) {
      this.playFirst();
    }
    else {
      this.stop();
    }
  },
  
  stop: function(){
    this.trigger('stop', this);
  },
  // },
  // // when add event occurs, song is added to SongQueue collection
  
  //console.log()
  
});