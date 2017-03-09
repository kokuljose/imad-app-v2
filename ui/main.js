var button=document.getElementById("count");
var coun=0;
button.onclick=function(){
     coun=coun+1;
     var span=document.getElementById("c");
     span.innerHTML=counter.toString();
};