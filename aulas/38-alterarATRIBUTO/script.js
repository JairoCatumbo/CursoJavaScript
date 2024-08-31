var h1=document.querySelector("#title");
//h1.classList="h1-class";
h1.setAttribute("class","testando-atributo");
console.log(h1);

var btn=document.getElementsByTagName("button");

btn[0].setAttribute("disabled","disabled");

var subH2=document.querySelector(".subtitle");

subH2.setAttribute("id","subtitulo");

console.log(subH2);

var lista=document.querySelector("#lista");

lista.removeAttribute("id");

console.log(lista);
