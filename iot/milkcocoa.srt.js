0
00:00:00,000 --> 00:00:01,000
//milkcocoa on ppap
doOnce[index] = true;
player.pauseVideo();
loadScript('https://cdn.mlkcca.com/v0.6.0/milkcocoa.js',function(e){
  // Note that this API key is shared among all srtjs users under milkcocoa free account.
  // Change it to your own API key when your test is finished.
  milkcocoa = new MilkCocoa('woodj2to2ujh.mlkcca.com');  player.playVideo();
  ds = milkcocoa.dataStore('messages');
  //
  //for message arrival from another milkcocoa instance:
  ds.on('send', function(sended) {
    console.log('[message recieved] title: '+sended.value.title+', content: '+sended.value.content);
  });
});

1
00:00:26,000 --> 00:00:26,500
//pen
ds.send({title : 'ppap', content : 'pen'});

2
00:00:28,000 --> 00:00:28,500
//apple
ds.push({title : 'ppap', content : 'apple'});

3
00:00:30,000 --> 00:00:31,500
//apple-pen
ds.send({title : 'ppap', content : 'apple-pen'});

4
00:00:32,500 --> 00:00:35,500
player.seekTo(22,true);//repeat
