1
00:00:00,000 --> 00:00:01,000
//map and gps
//
doOnce[index] = true;
player.pauseVideo();
player.setPlaybackRate(2);
CLOSE = 25;//1000;
var para = getUrlVars();
if (para["close"])  CLOSE = para["close"];
console.log("close: " + CLOSE);
//helper function
addMarker = function(pos){
  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: pos
  });
}
var voice;
var voices =speechSynthesis.getVoices();
voices.forEach(function(v, i){
  if(v.name == "Google 日本語") voice = v;
});
say = function(str,rate,pitch){
  var synthes = new SpeechSynthesisUtterance(str);
  synthes.rate = rate;
  synthes.pitch = pitch;
  synthes.voice = voice;
  speechSynthesis.speak(synthes);
}
vars.place = {};
//document.getElementById("player").style.width = '100%';
document.getElementById("ctrl").style.width = '640px';
document.getElementById("ctrl").style.height = '360px';
//set map
loadScript('//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',function(e){
loadScript('//maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyBX9TbP_IzDtVFFpdDheLqacx7jRGN_n5g',function(e2){
player.playVideo();
var cnt = new google.maps.LatLng(35.722153, 139.463041);//
var mapOptions = {
  zoom: 17,
  scaleControl: true,
  streetViewControl: false,
  panControlOptions: {
    position: google.maps.ControlPosition.LEFT_BOTTOM
  },
  zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_BOTTOM
  },
  center: cnt
};
map = new google.maps.Map(document.getElementById("ctrl"), mapOptions);
var latlng = new google.maps.LatLng(35.723289, 139.460972);//lat, lng);
addMarker(latlng);
myMarker = null;
// 現在位置の取得
var getloc = function(){
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  function geoSuccess(position) {
    // 緯度
    var lat = position.coords.latitude;
    // 経度
    var lng = position.coords.longitude;
    // 緯度経度の誤差
    var accuracy = Math.floor(position.coords.accuracy);
    // $("#accuracy").html("緯度経度の誤差 : " + accuracy + "m");
    console.log(lat + "," + lng + ",error " + accuracy + "m");
    mypos = new google.maps.LatLng(lat, lng);
    if (myMarker != null){
       myMarker.setMap(null);
       myMarker = null;
    }
    myMarker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.BOUNCE,
//        label: "Y",
      position: mypos
    });
    //check distance
    if (vars.place[index] != null){
      var distance = google.maps.geometry.spherical.computeDistanceBetween(vars.place[index], mypos);
      console.log(distance);
      if (distance < CLOSE && accuracy < CLOSE) {
        say("チェックポイントを通過しました。",1,1);
        player.playVideo();
      }
    }
　 }
}
function geoError() {
  console.log("Geolocation Error");
}
setInterval(getloc, 5000);
});
});

2
00:00:22,000 --> 00:00:23,000
player.pauseVideo();
vars.place[index] = new google.maps.LatLng(35.722906, 139.460984);
addMarker(vars.place[index]);

3
00:01:05,000 --> 00:01:06,000
player.pauseVideo();
vars.place[index] = new google.maps.LatLng(35.721739, 139.460788);
addMarker(vars.place[index]);

4
00:01:18,000 --> 00:01:19,000
player.pauseVideo();
vars.place[index] = new google.maps.LatLng(35.721728, 139.461151);
addMarker(vars.place[index]);

5
00:02:54,000 --> 00:02:56,000
player.pauseVideo();
vars.place[index] = new google.maps.LatLng(35.721049, 139.464864);
addMarker(vars.place[index]);

6
00:03:26,000 --> 00:03:27,000
vars.place[index] = new google.maps.LatLng(35.721854, 139.464982);
addMarker(vars.place[index]);
