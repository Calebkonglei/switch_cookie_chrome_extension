var url = '';
function $(id){
  return document.getElementById(id);
}

function checkBox(cookie,url){  
    if(cookie){
      $('checkBox').checked=true;
    }else{
      $('checkBox').checked=false;
    }
}
//checkBox 选中状态相关事件 
function checkBoxState(e){
  var state=e.target.checked;     
  if(state==true){
    setTestCookie(url,'x_server_env','test');
  }else{
    removeTestCookie(url,'x_server_env');
  }
}
//设置当前页面cookie，name='x-server-env', value='test'
function setTestCookie(url,name,value){
  var time = new Date();
  var expires = time.setTime(time.getTime()/1000+7*24*3600);//缓存7天
  var domain=url.split('/')[2];
  var cookie={
    'url':url,
    'name':name,
    'value':value,
    'path':'/',
    "domain":domain,
    'expirationDate':expires
  }
  chrome.cookies.set(cookie);
};

//删除设置的x-server-env cookie
function removeTestCookie(url,name){
  var cookie={
    'url':url,
    'name':name,
  }
  chrome.cookies.remove(cookie);
};

function init(){ 
 var id = chrome.extension.getBackgroundPage().a();
 var cookie = chrome.extension.getBackgroundPage().x_server_env_cookie;
 url = chrome.extension.getBackgroundPage().url;
 checkBox(cookie, url);
 $('tag').setAttribute('href','https://web.umeng.com/main.php?c=site&a=frame&siteid='+id+'');
 $('checkBox').addEventListener('click',function(e){
    checkBoxState(e); 
  })
}
document.addEventListener('DOMContentLoaded', init);

