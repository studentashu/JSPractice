var input;
function readm(){
   document.getElementById("texting").innerText=input;
}
function abc(){
   input=document.getElementById("inner").value;
   var i=input.length;
   if(i>50){
      var subs=input.substring(50);
      document.getElementById("texting").style.border="2px solid black";
      document.getElementById('texting').innerHTML=subs+'<a href="#" onclick="readm()">read more</a>';
   }
   else{
      document.getElementById("texting").style.border="2px solid  black";
      document.getElementById("texting").innerText=input;
   
   }
}
