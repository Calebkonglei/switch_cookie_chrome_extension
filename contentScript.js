window.onload=function(){
  var scripts=document.getElementsByTagName('script');
  for(var i in scripts){
    if(scripts[i].src && scripts[i].src.toString().indexOf('web_id') >-1){
      var status=scripts[i].src.split('?').toString();
      // console.log(scripts[i].src)
      var id=status.slice(status.indexOf('web_id')+7,status.length);
      if(id.indexOf('&')>-1){
        var end_id=id.slice(0,id.indexOf('&'));
        console.log('end_id', end_id)
        chrome.extension.sendMessage({id:end_id})
        return end_id;
      }else{
        console.log(id)
        chrome.extension.sendMessage({id:id})
        return id;
      }      
      break;
    }else{
      console.log('none')
    }
  }
}