var p;
var a;
function fun(){
    var in1=document.getElementById("email").value;
    var in2=document.getElementById("password").value;
    var i=in1.length;
    var j=in2.length;
     a=1;
    if(i==0 || j==0){
        if(a%2!=0){
        document.getElementById("sub").style.justifyContent="flex-end";
        a++;
        }
    
    else{
            document.getElementById("sub").style.justifyContent="flex-start";
        }
    }
    else{
     document.getElementById("submitt").innerText="you can enter";
    }}