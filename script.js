function senddis(){
  const value = document.zako['email:pass'].value.split('\n');
  value.forEach(v => {
    const dt = v.split(':');
    $.ajax({
      type: 'POST', 
      url: 'https://discord.com/api/v8/auth/login',
      headers: {"content-type": "application/json"},
      data: JSON.stringify({ email: dt[0], password: dt[1] })
    }).always((res,er,data) => {
      alert('Token:'+JSON.strnigify(res,null,2)+'\n');
      if(er === "error") return document.getElementById("output").value += 'エラーが発生しました。:'+dt[0]+'\n';
      
      document.getElementById("output").value += 'Token:'+res.body.authorization+'\n';
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
