var url = '';
function $(id){
  return document.getElementById(id);
}
function updateCookie() {
  chrome.tabs.getSelected(null, function(tab){
    url = tab.url.split('//')[0]+'//'+tab.url.split('/')[2];
    var cookieDetail = {
      url: tab.url,
      name: 'x_server_env',
    };
    chrome.cookies.get(cookieDetail, function(cookie){
      if (cookie) {
        $('checkBox').checked=true;
        chrome.browserAction.setIcon({'path':'icon.png'})
      } else {
        $('checkBox').checked=false;
        chrome.browserAction.setIcon({'path':'icon-off.png'})
      }
    })
  });
 }
//checkBox 选中状态相关事件 
function checkBoxState(e){
  var state=e.target.checked;     
  if(state==true){
    chrome.browserAction.setIcon({'path':'icon.png'});
    setTestCookie(url,'x_server_env','test');
  }else{
    chrome.browserAction.setIcon({'path':'icon-off.png'});
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
 var id = chrome.extension.getBackgroundPage().getId();
 chrome.tabs.onSelectionChanged.addListener(updateCookie);
 chrome.tabs.onUpdated.addListener(updateCookie);
 // var cookie = chrome.extension.getBackgroundPage().x_server_env_cookie;
 // var checked = chrome.extension.getBackgroundPage().checked;
 // url = chrome.extension.getBackgroundPage().url;
 //  $('checkBox').checked=checked;
 updateCookie()
 $('tag').setAttribute('href','https://web.umeng.com/main.php?c=site&a=frame&siteid='+id+'');
 $('checkBox').addEventListener('click',function(e){
    checkBoxState(e);
  })
}
document.addEventListener('DOMContentLoaded', init);



