document.addEventListener("keydown",function(event){

console.log(event.key);
if(event.key==="Enter"){
    console.log("clicou enter");
}
});

document.addEventListener("keyup",function(e){
    if(e.key==="Enter"){
        console.log("soltou enter");
    }
});