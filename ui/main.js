var button =document.getElementById('counter');
var counter=0;
button.onclick=function(){
    counter=counter+1;
    var div = document.getElementById('count1');
    div.innnerHTML=counter.toString();
    console.log(counter);
};