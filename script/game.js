


var skin=[
['texture/a2.png','texture/a1.png'],//магия
['texture/player/0-1.png','texture/player/0-2.png'],//игрок lvl_1
['texture/player/1-1.png','texture/player/1-2.png'],//игрок lvl_2
['texture/player/2-1.png','texture/player/2-2.png'],//игрок lvl_3


['texture/bot/0-1.png','texture/bot/0-2.png'],//бот lvl_0

];








var lvl=1;
var xp=0;
var matk=10;
var gold=0;
var hpp=0;
var hpb=0;
var energy=10;
var atack=false;
var playing=false;
var look=1;

var xa=0;
var x=0;
var xb=150;

document.getElementById('i1').src=skin[lvl][1];
document.getElementById('i1').style.left=x;
document.getElementById('i4').src=skin[4][0];
document.getElementById('i4').style.left=xb;
newdatas();

document.onkeyup = function checkKeycode(event){
    var keycode;
    if(!event) var event = window.event;
   keycode = event.which; 
if(playing==true){

if(keycode==39){
if((x<250)&&(x<(xb-50))){
x+=25;
document.getElementById('i1').style.left=x;}
document.getElementById('i1').src=skin[lvl][1];
look=1}


if(keycode==37){
if(x>0){
x-=25;
document.getElementById('i1').style.left=x;}
document.getElementById('i1').src=skin[lvl][0];
look=0}


/*if(keycode==38){bot();}//удалить
if(keycode==40){clearInterval(timerb);}//удалить*/


if((keycode==32)&&(atack==false)){atack=true;atacked();}
}

}









function bot(){var a;//отредактировать
timerb=setInterval(function(){
a=Math.floor(Math.random() * 4);
if(a==0){if(xb<250){xb+=25;
document.getElementById('i4').style.left=xb;document.getElementById('i4').src=skin[4][1];
}document.getElementById('i4').src=skin[4][1];} 
else 
if(a==1){if((xb>-50)&&((x+50)<xb)){xb-=25;
document.getElementById('i4').style.left=xb;document.getElementById('i4').src=skin[4][0];
}else{if((x+50)==xb){hpp-=Math.floor(Math.random()*(25*lvl));newhp();}}document.getElementById('i4').src=skin[4][0];}
},250);}


function atacked(){if(look==0){xa=x-25} if(look==1){xa=x+25}var a=0; var looka=look;
document.getElementsByClassName('i2')[0].style.display='block';
document.getElementById('i2').src=skin[0][look];
document.getElementById('i2').style.left=xa;

atacking=setInterval(function(){
if(a==3){clearInterval(atacking);document.getElementsByClassName('i2')[0].style.display='none';atack=false;}
if(looka==0){xa-=25} if(looka==1){xa+=25}
document.getElementById('i2').style.left=xa;
if(xa>=xb){hpb-=Math.floor(Math.random()*matk);newhp();a=2;}
a++;},250);  }




game_time=setInterval(function(){if(energy<10){energy++;newdatas()}},90000);