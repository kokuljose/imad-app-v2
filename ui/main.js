console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="newvalue";

var img=document.getElementById("madi");
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginleft+"px";
}
img.onclick=function() {
    var interval=setInterval(moveRight,100);
    
};