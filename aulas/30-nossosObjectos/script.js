let pessoa={
    nome:"jairo",
    idade:27,
    falar:function(){
        console.log("ola")
    },
    soma:function(a,b){
        return a+b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

console.log(pessoa.soma(5,10));