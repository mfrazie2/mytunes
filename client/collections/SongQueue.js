// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      console.log('SongQueue.add');
    });
    this.on('remove', function() {
      console.log("SQ.remove");
    });
    
    
    // ;
    // ;this.add(song)
  },
  playFirst : function(){
    return this.models[0];
  }
  // },
  // // when add event occurs, song is added to SongQueue collection
  
  //console.log()
  
});