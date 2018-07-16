0
00:00:00,000 --> 00:00:01,000
//ppap obniz
//demo url:  http://obniz.io/users/221/repo/srtjs.html?v=CUgQUGIdlJQ&surl=https://raw.githubusercontent.com/qurihara/examples.srt.js/master/obniz/led.srt.js
doOnce[index] = true;
obniz.display.clear();
obniz.display.print("LED TEST");
led = obniz.wired("LED", { anode:0, cathode:1 } );

1
00:00:29,500 --> 00:00:31,500
led.on();
obniz.display.clear();
obniz.display.print("ON");

2
00:00:34,000 --> 00:00:35,500
led.off();
obniz.display.clear();
obniz.display.print("OFF");

3
00:00:37,000 --> 00:00:38,500
led.on();
obniz.display.clear();
obniz.display.print("ON");

4
00:00:40,500 --> 00:00:41,500
led.off();
obniz.display.clear();
obniz.display.print("OFF");
