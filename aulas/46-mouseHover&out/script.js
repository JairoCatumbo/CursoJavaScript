var title=document.querySelector("#title");

title.addEventListener("mouseover",function(){
    title.style.backgroundColor="red";
});

title.addEventListener("mouseout",function(){
    title.style.backgroundColor="white";
});


var sub=document.querySelector(".subtitle");

sub.addEventListener("mouseover",function(){
    var p=document.querySelector(".hide");
    p.classList.remove("hide");
});
