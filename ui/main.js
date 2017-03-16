console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="newvalue";

var img=document.getElementById("madi");
function moveRight(){
    marginleft=marginleft+10;
    img.style.marginLeft+"px";
}
img.onclick=function() {
    var interval=setInterval(moveright,100);
    
};