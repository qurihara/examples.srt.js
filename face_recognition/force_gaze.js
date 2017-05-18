1
00:00:00,000 --> 00:00:01,000
//face recognition
doOnce[index] = true;
function control(flag){
  var state = player.getPlayerState();
  if (state == 1){
    if (flag == false)
      player.pauseVideo();
  }else{
    if (flag == true)
      player.playVideo();
  }
}
var cam = document.createElement('canvas');
cam.style.display = 'none';
document.getElementsByTagName( 'body' )[ 0 ].appendChild(cam);
loadScript('https://raw.githubusercontent.com/qurihara/examples.srt.js/master/face_recognition/ccv.js',function(e){
loadScript('https://raw.githubusercontent.com/qurihara/examples.srt.js/master/face_recognition/face.js',function(e2){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  var video = document.createElement('video');
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  // var laughingman = new Image();
  // laughingman.src = 'https://blanktar.jp/blog/2016/01/laughing.png';
  navigator.getUserMedia(
  	{video: true},
  	function(stream){
  		video.src = URL.createObjectURL(stream);
  		video.addEventListener('loadedmetadata', function(){
  			canvas.width = video.videoWidth;
  			canvas.height = video.videoHeight;
  			(function animation(){
          var nFace = 0;
  				context.drawImage(video, 0, 0);
  				ccv.detect_objects({
  					'canvas': ccv.pre(canvas),
  					'cascade': cascade,
  					'interval': 5,
  					'min_neighbors': 1
  				}).forEach(function(x){
            nFace++;
  					//context.drawImage(laughingman, x.x, x.y, x.width, x.height);
  				});
          if (nFace > 0){
            console.log(nFace + " face(s) detected.");
            control(true);
          }else{
            control(false);
          }
  				requestAnimationFrame(animation);
  			})();
  		});
  	},
  	console.log
  );
});
});
