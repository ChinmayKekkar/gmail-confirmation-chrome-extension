

chrome.browserAction.onClicked.addListener(function (tab) {
  alert('Gmail confirmator script is running')
  var sendBtn = document.getElementsByClassName("T-I J-J5-Ji aoO v7 T-I-atl L3");
  var emailBodyMessage = document.getElementsByClassName("Am Al editable LW-avf tS-tW");
  for(let i=0;i<sendBtn.length;i++){
  sendBtn[i].onclick = function(e){
  
  var answer=confirm('Do you want to send the message? \n'+ emailBodyMessage[i].innerHTML)
  if(answer){
  alert("message-sent: " + emailBodyMessage[i].innerHTML);
  }else{
   e.preventDefault();
  e.stopPropagation();
  
  }
  }
  }

})