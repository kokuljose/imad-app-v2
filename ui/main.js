console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="newvalue";

var img=document.getElementById("madi");
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+4;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function() {
    var interval=setInterval(moveRight,40);
    
};