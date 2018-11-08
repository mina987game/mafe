





//из меню в бой
function on1(){
if(energy>1){
x=0;
xb=150;
hpp=50+50*lvl;
hpb=100;
document.getElementById('i1').src=skin[lvl][1];
document.getElementById('i1').style.left=x;
document.getElementById('i4').src=skin[4][0];
document.getElementById('i4').style.left=xb;
energy-=2;newdatas();
document.getElementsByClassName('menu')[0].style.display='none';
bot();
document.getElementsByClassName('fight')[0].style.display='block';
php.innerHTML=hpp;bhp.innerHTML=hpb;playing=true;}
else{on14();//действие если нет энергии
}}

//победа или поражение
function on11(){
document.getElementsByClassName('menu')[0].style.display='block';
document.getElementsByClassName('fight')[0].style.display='none';
clearInterval(timerb);
playing=false;
}

//действие если вы проиграли
function on12(){on11();notice_text.innerHTML='вы проиграли';on15();}
//действие если вы выиграли
function on13(){on11();notice_text.innerHTML='вы победили';on15();}
//действие если нет энергии
function on14(){notice_text.innerHTML='мало энергии';on15();}
//открыть оповещение
function on15(){document.getElementsByClassName('notice')[0].style.display='block';}
//закрыть оповещение
function on16(){document.getElementsByClassName('notice')[0].style.display='none';}



//закрыть меню и открыть магазин
function on2(){
document.getElementsByClassName('menu')[0].style.display='none';
document.getElementsByClassName('shop')[0].style.display='block';
}
//открыть меню и закрыть магазин
function on21(){
document.getElementsByClassName('menu')[0].style.display='block';
document.getElementsByClassName('shop')[0].style.display='none';
}

//открыть группу в вк
function on3(){window.open('https://vk.com/mina987_game')}



function newdatas(){
if(xp>((lvl*100)-1)){
if(lvl<3){
xp-=lvl*100;
lvl+=1;
energy=10;
gold+=15
}else{
xp-=lvl*100;
energy=10;
gold+=15
}}
g1.innerHTML=gold;
e1.innerHTML=energy;
l1.innerHTML='lvl:'+lvl;
x1.innerHTML='xp:'+xp+'/'+(lvl*100);}


function newhp(){
php.innerHTML=hpp;
bhp.innerHTML=hpb;
if(hpp<1){gold+=Math.floor(Math.random()*3);newdatas();on12();}
if(hpb<1){xp+=Math.floor(Math.random()*20);gold+=Math.floor(Math.random()*10);newdatas();on13();}}



//покупка энергии
function s1(){
if(gold>9){
gold-=10;
energy++;
newdatas();
s4()}else{s3()}}

//покупка силы
function s2(){
if(gold>24){
gold-=25;
matk++;
newdatas();
s4()}else{s3()}}


function s3(){on21();notice_text.innerHTML='мало денег';on15();}


function s4(){on21();notice_text.innerHTML='куплено';on15();}














