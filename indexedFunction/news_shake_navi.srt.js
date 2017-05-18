1
00:00:00,000 --> 00:00:01,000
//headline news
doOnce[index] = true;
vars.myfunc = {};
var g=document.createElement("div");
g.id ="debug";
document.getElementsByTagName( 'body' )[ 0 ].appendChild(g);
loadScript('//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',function(e){
loadScript('//rawgit.com/GerManson/gShake/master/lib/gShake.js',function(e2){
  $(document).ready(function() {
    $(this).gShake(function() {
      var fn = indexedFunction(vars.myfunc);
      if (fn != null) {
        fn.call(null);
      }
    });
  });
});
});

2
00:00:01,001 --> 00:00:14,000
//1st headline
vars.myfunc[index] = function(){
  player.seekTo(64,true);
}

3
00:00:14,001 --> 00:00:24,000
//2nd headline
vars.myfunc[index] = function(){
  //player.seekTo(274,true);
  window.location.href ='https://www.amazon.co.jp/ebook/dp/B01M27I403';
}

4
00:00:24,001 --> 00:00:38,000
//3rd headline
vars.myfunc[index] = function(){
  player.seekTo(456,true);
}

5
00:01:04,001 --> 00:04:34,000
//1st in detail
vars.myfunc[index] = function(){
  player.seekTo(14,true);
}

6
00:04:34,001 --> 00:07:63,000
//2nd in detail
vars.myfunc[index] = function(){
  player.seekTo(24,true);
}

7
00:07:36,001 --> 00:16:44,000
//3nd in detail
vars.myfunc[index] = function(){
  player.seekTo(1,true);
}
