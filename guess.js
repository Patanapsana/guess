var a=Math.ceil(Math.random()*100);
var n=0;
var s="";
var c="tries";
document.getElementById("check").onclick=function(){
var b=parseInt(document.getElementById("num").value);
if(a==b)
{
    n=n+1;
    s="Congratulations!!You have got the number in ";
    s=s+n+c;
    n=n-1;
}
if(a<b)
{
    n=n+1;
    s="!Try with smaller number";
    s=n+c+s;
}
if(a>b)
{
    n=n+1;
    s="!Try with greater number";
    s=n+c+s;
}
document.getElementById("es").textContent= s;
}