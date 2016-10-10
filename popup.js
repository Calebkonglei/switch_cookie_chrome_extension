var url = '';
function $(id){
  return document.getElementById(id);
}
// function checkCookie(url){
//   chrome.cookies.getAll({
//     'url':url,
//   },function(cookies){
//     var i=0, len=cookies.length, cookie=[];
//     for(;i<len;i++){
//       var cookieMsg={
//         name:cookie[i].name,
//         value:cookie[i].value
//       }
//       cookie.push(cookieMsg);
//     }
//     cookie.some(function(item){

//     })
//   })
  
// }

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
// function removeTestCookie(url,name){
//   var cookie={
//     'url':url,
//     'name':name,
//   }
//   chrome.cookies.remove(cookie);
// };

  //获取当前页面url根目录，如http://www.baidu.com/
chrome.tabs.getSelected(null, function(tab){
  url=tab.url.split('//')[0]+'//'+tab.url.split('/')[2]+'/';
  $('cook').innerText=url;
});

function init(){
 $('checkBox').addEventListener('click',function(e){
      var status=e.target.checked;
      var URL = $('cook').innerText.toString();
      if(status==true){
        setCookie(URL,'x-server-env', 'test');
      }else{
        setCookie(URL, 'x-server-env', 'test');
      }
  }) 
}
document.addEventListener('DOMContentLoaded', init);
