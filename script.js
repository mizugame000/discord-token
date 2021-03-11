const sp = window.superagent;
function senddis(){
  const value = document.zako['email:pass'].value.split('\n');
  console.log(value);
  value.forEach(v => {
    console.log(v)
    const dt = v.split(':');
    console.log(dt)
    sp
    .post('https://discord.com/api/v8/auth/login')
    .send({email:dt[0],password:dt[1]})
    .end(function(er,re){
      if(!re.ok) return appendlog('エラーが発生しました。 '+dt[0]+'\n');
      const body = re.body;
      appendlog(body.token);
    });
  });
};
function appendlog(strings){
  document.getElementById("output").innerHTML += '[Gettoken-with-web]: 'strings;
};
function cleardis(){
  document.zako['email:pass'].value = '';
};
function copydis(){
  document.zako['email:pass'].select();
  document.execCommand('Copy');
};
function copytoken(){
  document.getElementById('output').select();
  document.execCommand('Copy');
};
