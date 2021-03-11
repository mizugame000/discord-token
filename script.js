"use strict";
var sp = window.superagent;
function senddis(){
  var value = document.zako['email:pass'].value.split('\n');
  value.forEach(function (v){
    var dt = v.split(':');
    sp
    .post('https://discord.com/api/v8/auth/login')
    .send({email:dt[0],password:dt[1]})
    .end(function(er,re){
      if(!re.ok) return appendlog('エラーが発生しました。 '+dt[0]+'\n');
      var body = re.body;
      appendlog(body.token);
    });
  });
}

function appendlog(strings){
  document.getElementById("output").innerHTML += '[TokenGetter-with-web]: '+strings;
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
