0
00:00:00,000 --> 00:00:01,000
//ppap obniz
doOnce[index] = true;
player.pauseVideo();
obniz = new Obniz("OBNIZ_ID_HERE");
obniz.onconnect = async function () {
  obniz.display.print("srt.js");
  player.playVideo();
}

1
00:00:26,000 --> 00:00:26,500
//pen
obniz.display.print("pen");

2
00:00:28,000 --> 00:00:28,500
//apple
obniz.display.print("apple");

3
00:00:30,000 --> 00:00:31,500
//apple-pen
obniz.display.print("apple-pen");

4
00:00:32,500 --> 00:00:35,500
player.seekTo(22,true);//リピート再生