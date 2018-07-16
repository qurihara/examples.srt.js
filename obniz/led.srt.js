0
00:00:00,000 --> 00:00:01,000
//ppap obniz
//demo url:  http://obniz.io/users/221/repo/srtjs.html?v=0E00Zuayv9Q&surl=https://raw.githubusercontent.com/qurihara/examples.srt.js/master/obniz/ppap_obniz.srt.js
doOnce[index] = true;
obniz.display.clear();
obniz.display.print("LED TEST");
led = obniz.wired("LED", { anode:0, cathode:1 } );

1
00:00:29,500 --> 00:00:31,500
led.on();

2
00:00:34,500 --> 00:00:35,500
led.off();

3
00:00:37,400 --> 00:00:38,500
led.on();

4
00:00:40,500 --> 00:00:41,500
led.off();
