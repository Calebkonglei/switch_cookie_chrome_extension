var id=[];
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    id=[];
    id.push(request.id);
  }
);
var getId=function(){
    return id; 
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
        chrome.browserAction.setIcon({'path':'icon.png'})
      } else {
        chrome.browserAction.setIcon({'path':'icon-off.png'})
      }
    })
  });
 }
chrome.tabs.onSelectionChanged.addListener(updateCookie);
chrome.tabs.onUpdated.addListener(updateCookie);
