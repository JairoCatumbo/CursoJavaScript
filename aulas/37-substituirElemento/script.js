var ele= document.createElement("h3");

ele.classList="testando-classe";

var texto=document.createTextNode("elemento e o texto");

ele.appendChild(texto);

console.log(ele);

var title=document.querySelector("#title");
//selecionar o pai do elemento sem saber quem eh

var body=title.parentNode;

//var body=document.querySelector("body");

body.replaceChild(ele,title);