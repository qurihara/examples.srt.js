1
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
vars.myfunc = {};
vars.captured = {};
var cam = document.createElement('canvas');
cam.style.display = 'none';
document.getElementsByTagName( 'body' )[ 0 ].appendChild(cam);
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  var video = document.createElement('video');
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  navigator.getUserMedia(
  	{video: true},
  	function(stream){
  		video.src = URL.createObjectURL(stream);
  		video.addEventListener('loadedmetadata', function(){
  			canvas.width = video.videoWidth;
  			canvas.height = video.videoHeight;
  			(function animation(){
          context.drawImage(video, 0, 0);
            var fn = indexedFunction(vars.myfunc);
            if (fn != null) {
              fn.call(null,canvas);
              console.log(vars.myfunc);
              console.log(index);
            }
            requestAnimationFrame(animation);
  			})();
  		});
  	},
  	console.log
  );

2
00:00:14,000 --> 00:00:15,000
doOnce[index] = true;
console.log(index);
vars.myfunc[index] = function(canvas){
  if (index in vars.captured) return;
  vars.captured[index]=true;
  var png = canvas.toDataURL();
  var img = document.createElement('img');
  img.src = png;
  document.getElementsByTagName( 'body' )[ 0 ].appendChild(img);
}

3
00:00:25,000 --> 00:00:26,000
doOnce[index] = true;
console.log(index);
vars.myfunc[index] = function(canvas){
  if (index in vars.captured) return;
  vars.captured[index]=true;
  var png = canvas.toDataURL();
  var img = document.createElement('img');
  img.src = png;
  document.getElementsByTagName( 'body' )[ 0 ].appendChild(img);
}
