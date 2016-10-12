var id=[];
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    id=[];
    id.push(request.id);
  }
);
var a=function(){
  if(id){
    return id;
  }else{
    return 'false';
  }
  
}

