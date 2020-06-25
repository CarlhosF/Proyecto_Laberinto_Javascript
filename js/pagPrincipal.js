
var dato;
var dato2;
var url="niveles/html/";
var B1=document.getElementById("btt-1");
dato=Math.random()*3;
dato2=Math.floor(dato)+1;
B1.onclick=function(){
   url=url+dato2+".html";
   location.replace(url);
}