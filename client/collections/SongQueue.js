// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      console.log('SongQueue.add');
  });
    // ;
    // ;this.add(song)
  },
  // this.playFirst = "";
  // },
  // // when add event occurs, song is added to SongQueue collection
  
  //console.log()
  
});