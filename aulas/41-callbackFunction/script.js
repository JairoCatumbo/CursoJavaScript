function ver(num){
    console.log("o resultado da operacacao e :" +num);
}

function soma(a,b,callback){
    var op=a+b;
    callback(op);
}

function multiplicacao(a,b,cb){
    var op=a*b;
    cb(op);
}

soma(2,2,ver);
multiplicacao(2,4,ver);

