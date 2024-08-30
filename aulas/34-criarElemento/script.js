
var novoParagrafo= document.createElement("p");


var texto=document.createTextNode("este eh o conteudo");

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

var body=document.querySelector("body");

body.appendChild(novoParagrafo);

var container=document.querySelector("#container");
var ele=document.createElement("span");

ele.appendChild(document.createTextNode("texto fo span"));

container.appendChild(ele);