"use strict";
var sp = window.superagent;
window.senddis = function(){
  var value = document.zako['email:pass'].value.split('\n');
  value.forEach(function (v){
    var dt = v.split(':');
    sp
    .post("https://discord.com/api/v8/auth/login")
    .set("origin", "https://discord.com")
    .set("user-agent", "DiscordBot (https://discordapp.com, 2.0)")
    .set("accept", "*/*")
    .set("content-type", "application/json")
    .set("referrer", "https://discord.com/login")
    .set("sec-ch-ua": "DiscordBot (https://discordapp.com, 2.0)")
    .set("sec-ch-ua-mobile", "?0")
    .set("sec-fetch-dest", "empty")
    .set("sec-fetch-mode", "cors")
    .set("sec-fetch-site", "same-origin")
    .send({email:dt[0],password:dt[1]})
    .end(function(er,re){
      if(!re.ok) appendlog('エラーが発生しました。 '+dt[0]);
      var body = re.body;
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
