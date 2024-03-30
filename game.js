var k=["Air","Ais","Aip"];
var p="";
var pscr=0;
var cscr=0;
var r="";
var whowins="";
var kmre="";
var col="";

function aiTurn()
{
var ran=Math.floor(Math.random()*3);
var pr=k[ran];
return pr;
}


$(".r").click(function()
{ 
p=this.id;
animatePress(p);
document.getElementById("pch").innerHTML="You Chose : "+p;


r=aiTurn();
console.log(p);
console.log(r);
animatePress(r);
if(r=="Ais")
col="Scissor";
else if(r=="Air")
col="Rock"
else col="Paper";
document.getElementById("Ach").innerHTML="AI Chose : "+col;

kmre=check();

    document.getElementById("res").innerHTML="Result : "+kmre.toUpperCase();

if(kmre=="AI wins")
document.getElementById("Acr").innerHTML="Score : "+cscr;
else if(kmre=="Player wins")
document.getElementById("scr").innerHTML="Score : "+pscr;
else
{}
console.log(pscr+""+cscr);

if(pscr==1)
$("body").addClass("lv1");
if(pscr==3)
$("body").addClass("lv3");
if(pscr==5)
$("body").addclass("lv5");
}

)
var reply;
document.getElementById("rock").onclick=reply;
document.getElementById("paper").onclick=reply;
document.getElementById("scissor").onclick=reply;
function check()
{
    if(p=="rock"&&r=="Air"||p=="paper"&&r=="Aip"||p=="scissor"&&r=="Ais")
    return "draw";

else if((r=="Aip" && p=="rock")|| (r=="Air" && p=="scissor")||(r=="Ais" && p=="paper"))
{
  cscr++;
return "AI wins";

}
else
{
  pscr++;
return "Player wins";
}

}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
      $("#"+currentColor).removeClass("pressed");
    }, 1000);
   
  }

 if(pscr==5)
  $("body").addClass("lv5");
  if(pscr==10)
  $("body").addClass("lv10");
