function numPrimo(num){

    for (let i = 1; i <= num; i++){
        let flag = false;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = true;
                break;
            }
        }

        if( (i > 1 && i <1000) && flag == false){
            console.log(i);
        }
    }
}


function validaSenha(senha){
    if (senha.length < 8){
        console.log("precisa conter no mínimo 8 caracteres");
    }

    else if(senha.search(/[a-z]/) < 0){
        console.log("precisa conter no mínimo uma letra minúscula");
    }

    else if(senha.search(/[A-Z]/) < 0){
        console.log("precisa conter no mínimo uma letra maiuscula");
    }

    else if(senha.search(/[0-9]/) < 0){
        console.log("precisa conter no mínimo um número");
    }

    else{
        console.log("senha válida");
    }
}

function fatorial(num){
    if(num < 0){
        return -1;
    }

    else if(num == 0){
        return 1;
    }

    else{
        return (num * fatorial(num -1));
    }

}

function quadradoPerfeito(num){
    for(let i = 1; i <= num; i++){
        raiz = Math.sqrt(num);
        if(raiz == Math.floor(raiz)){
            console.log("é um quadrado perfeito");
        }

        else{
            console.log("não é um quadrado perfeito");
        }
    }
}