1
00:00:00,000 --> 00:00:01,000
// meshblu_send
loadScript('http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js');

2
00:00:37,000 --> 00:00:38,000
var myEndpoint="xxx.xxx.xxx.xxx";
var myTriggerUuid = "yyyyyy";
var myTriggerToken = "zzzzzz";
var endPointURL = 'http://'+myEndpoint + '/data/'+myTriggerUuid;
$.ajax ({
    url : endPointURL,
    type : 'post',
    data : { "hello" : "world"},
    timeout : 5000,
	headers: {
		'meshblu_auth_uuid':  myTriggerUuid,
		'meshblu_auth_token': myTriggerToken
	},
  success : function ( contents ) {
		console.log('trigger success');
  },
  error : function ( request, errorMessage ) {
        console.log('trigger : Network error');
		    console.log('trigger  : ' + errorMessage);
  }
});
