console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML="kokul jose";
var img=document.getElementById(madi);
var mleft=0;
function moveright()
{
    mleft-mleft+10;
    img.style.marginLeft=mleft+"px";
}
img.onclick = function()
{
    var interval=setInterval(moveright,100);
}