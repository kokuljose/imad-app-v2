var button=document.getElementById("count");
var count=0;
button.onclick=function() {
    count=count+1;
    var span =document.getElementById("c");
    span.innerHTML=count.toString();
};