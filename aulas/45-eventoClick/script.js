
var btn=document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){
    console.log("clicou");
    
    this.style.color="red";
});

var title=document.querySelector("#title");

title.addEventListener("click",function(){

    var sub=document.querySelector(".subtitle");
    sub.style.display="none";
});

var sub2=document.querySelector(".subtitle");

sub2.addEventListener("dbclick",function(){
    

    title.style.display="none";
});