0
00:00:00,000 --> 00:00:01,000
//いないいないばあwebmo
doOnce[index] = true;
player.pauseVideo();
loadScript('https://cdn.rawgit.com/cidreixd/webmo-library-javascript/master/dist/webmo.min.js',function(e){
  webmo = new Webmo.http("webmo.local");
  player.playVideo();
});

1
00:00:01,500 --> 00:00:02,000
webmo.rotateBy(180,360)

2
00:00:04,000 --> 00:00:05,000
webmo.rotateBy(-180,360)

3
00:00:16,000 --> 00:00:17,000
webmo.rotateBy(180,360)

4
00:00:18,000 --> 00:00:19,000
webmo.rotateBy(-180,360)

5
00:00:29,000 --> 00:00:30,000
webmo.rotateBy(180,360)

6
00:00:31,000 --> 00:00:32,000
webmo.rotateBy(-180,360)

7
00:00:44,000 --> 00:00:45,000
webmo.rotateBy(180,360)

8
00:00:46,000 --> 00:00:47,000
webmo.rotateBy(-180,360)

9
00:00:55,000 --> 00:00:56,000
player.seekTo(0,true)
