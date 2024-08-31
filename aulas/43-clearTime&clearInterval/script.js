var x=0;

var myTimer = setTimeout(function(){

    console.log("o x e =0");
},1500);

x=5;

if(x>0){
    clearTimeout(myTimer);
    console.log("o x e > 0");
}


var myinterval=setInterval(function(){
    console.log("intervalo");;

},500);

setTimeout(function(){
    console.log("nao repetir");

    clearInterval(myinterval);

},2000);