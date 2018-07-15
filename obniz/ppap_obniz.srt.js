0
00:00:00,000 --> 00:00:01,000
//ppap obniz
doOnce[index] = true;
player.pauseVideo();
loadScript('https://cdn.rawgit.com/cidreixd/webmo-library-javascript/master/dist/webmo.min.js',function(e){
  webmo = new Webmo.http("webmo.local");
  player.playVideo();
  webmo.rotateBy(360,360);
});

1
00:00:26,000 --> 00:00:26,500
//pen
webmo.rotateBy(90,360);//webmoを90度回す

2
00:00:28,000 --> 00:00:28,500
//apple
webmo.rotateBy(-180,360);//webmoを-180度回す

3
00:00:30,000 --> 00:00:31,500
//apple-pen
webmo.rotateBy(270,360);//webmoを270度回す

4
00:00:32,500 --> 00:00:35,500
webmo.rotateBy(180,360);//webmoを180度回す
player.seekTo(22,true);//リピート再生
