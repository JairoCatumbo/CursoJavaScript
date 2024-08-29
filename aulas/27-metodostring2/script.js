
var frase= "esta e a frase";

console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());

var nome="   jairo";


//retira os espacos
console.log(nome);

console.log(nome.trim());

// converte para array

console.log(frase.split(" "));

var skills= "css,js,html,php";

var listaSkills=skills.split(",");

console.log(listaSkills);

//ultimo index
var outraFrase="eu quero a ultima palavra ultima";
console.log(outraFrase.indexOf("ultima"));
//index da ultima palavra ultima
console.log(outraFrase.lastIndexOf("ultima"));