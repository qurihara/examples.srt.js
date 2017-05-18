1
00:00:00,000 --> 00:00:01,000
//bibliobattle
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
00:00:10,001 --> 00:08:06,000
//1st
vars.myfunc[index] = function(){
  window.location.href ='https://www.amazon.co.jp/dp/4591132374';
}

3
00:08:06,001 --> 00:47:56,000
//2nd
vars.myfunc[index] = function(){
  window.location.href ='https://www.amazon.co.jp/dp/4847093399/';
}
