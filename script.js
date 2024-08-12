var x=1;
function incr(){
    if(x>=1){
        document.getElementById("num").innerHTML=x+1;
        x++;
    }
}
function decr(){
    if(x>1 && x!=0){
        document.getElementById("num").innerHTML=x-1;
        x--;
    }
}