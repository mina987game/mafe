
function btn1(){
if((x<250)&&(x<(xb-50))){
x+=25;
document.getElementById('i1').style.left=x;}
document.getElementById('i1').src=skin[lvl][1];
look=1}


function btn2(){
if(x>0){
x-=25;
document.getElementById('i1').style.left=x;}
document.getElementById('i1').src=skin[lvl][0];
look=0}




function btn3(){
if(atack==false){
atack=true;atacked();}}


