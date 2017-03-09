var button=document.getElementById("count");
var coun=0;
button.onclick=function(){
     coun=coun+1;
     var span=document.getElementById("coun");
     span.innerHTML=counter.toString();
};