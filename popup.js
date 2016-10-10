var url = '';
function $(id){
  return document.getElementById(id);
}

function checkBox(url){
  var cookieDetail={
    'url':url,
    'name':'x-server-env',
  };
  chrome.cookies.get(cookieDetail,function(cookie){
    if(cookie){
      $('checkBox').checked=true;
    }else{
      $('checkBox').checked=false;
    }
 });
}
//checkBox 选中状态相关事件 
function checkBoxStatus(e){
  var status=e.target.checked;     
  if(status==true){
    setTestCookie(url,'x-server-env','test');
  }else{
    removeTestCookie(url,'x-server-env');
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
//获取当前页面url根目录，如http://www.baidu.com/
chrome.tabs.getSelected(null, function(tab){
  url=tab.url.split('//')[0]+'//'+tab.url.split('/')[2];
  $('cook').value=url;
  checkBox(tab.url);
});

 $('checkBox').addEventListener('click',function(e){
    checkBoxStatus(e);   
  }) 
}
document.addEventListener('DOMContentLoaded', init);
