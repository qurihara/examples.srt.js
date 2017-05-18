1
00:00:00,000 --> 00:00:01,000
// meshblu_receive
player.pauseVideo();
function toggleVideo(){
  var state = player.getPlayerState();
  if (state == 1){
    player.pauseVideo();
  }else{
    player.playVideo();
  }
}
loadScript('http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',function(e){
  loadScript('http://cdn.octoblu.com/js/meshblu/latest/meshblu.bundle.js',function(e2){
    var conn = meshblu.createConnection({
      "uuid": "xxxxx",
      "token": "zzzz",
      "server": "yyy.yyy.yyy.yyy",
      "port": 80
    });
    conn.on('ready', function(data){
      console.log('UUID AUTHENTICATED!');
      console.log(data);
      player.playVideo();
      conn.subscribe({
        uuid: "xxxxx",
        //types: ["sent", "received"],
        //topics: ["device*", "-*status"]
      }, function(result) {
        console.log(result);
        conn.on('message', function (message) {
          console.log('message received', message);
    //              $(".activity").prepend(JSON.stringify(message) + '<br />');
          var json = message;
          if (json.payload != null){
            var scr = JSON.stringify(json.payload).match(/mesh/); //json.payload.nextslide;
            console.log(scr);
            if (scr != null) {
              toggleVideo();
              console.log(scr);
            }
          }
        });
      });
    });
  });
});
