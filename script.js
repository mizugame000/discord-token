"use strict";
var sp = window.superagent;
function senddis(){
  var value = document.zako['email:pass'].value.split('\n');
  value.forEach(function (v){
    var dt = v.split(':');
    sp
    .post('https://discord.com/api/v8/auth/login')
    .set("Origin","https://discord.com")
    .send({email:dt[0],password:dt[1]})
    .end(function(er,re){
      if(!re.ok) appendlog('エラーが発生しました。 '+dt[0]);
      var body = re.body;
      appendlog(re);
      appendlog(JSON.stringify(re,null,2))
      appendlog(er)
      appendlog(body.token)
      appendlog(body)
    });
  });
}

function appendlog(strings){
  document.getElementById("output").innerHTML += String('[TokenGetter-with-web]: '+strings+'\n');
}

function cleardis(){
  document.zako['email:pass'].value = '';
}

function copydis(){
  document.zako['email:pass'].select();
  document.execCommand('Copy');
}

function copytoken(){
  document.getElementById('output').select();
  document.execCommand('Copy');
}
