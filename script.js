"use strict";
var sp = window.superagent;
function senddis(){
  appendlog(sp)
  appendlog(JSON.stringify(sp,null,2))
  var value = document.zako['email:pass'].value.split('\n');
  appendlog(value)
  value.forEach(function (v){
    appendlog(v)
    var dt = v.split(':');
    appendlog(v)
    sp
    .post('https://discord.com/api/v8/auth/login')
    .set("Access-Control-Allow-Origin",true)
    .send({email:dt[0],password:dt[1]})
    .end(function(er,re){
      if(!re.ok) appendlog('エラーが発生しました。 '+dt[0]);
      var body = re.body;
      appendlog(body.token);
      appendlog(JSON.stringify(body,null,2))
      appendlog(sp)
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
