var button=document.getElementById("count");
var count=0;
button.onclick=function() {
    var req=new XMLHttpRequest();
    req.onreadystatechange=function(){
        if(req.readyState===XMLHttpRequest.DONE){
            if(req.status===200){
             var count=request.responseText;
             var span =document.getElementById("c");
             span.innerHTML=count.toString();
            }
        }
    }
    
    
};