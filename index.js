import cipher from './cipher.js';
const offsetChaveEncr = document.getElementById("offsetEncriptar");
const offsetChaveDec = document.getElementById("offsetDecriptar");
const ChaveMsg = document.getElementById("mensagem");
const msgChave = document.getElementById("msg");
const btnCodificar = document.getElementById("buttonCodificar");
const btnDecodificar = document.getElementById("buttonDecodificar");
const btnlimpar = document.getElementById("btnlimpar")
const mensagemCriptografada = document.getElementById("mensagemCodificada");
const mensagemDecodificada = document.getElementById("mensagemDecodificada");


//console.log(cipher.encode(3, "MICHELE VALERIO MARTINS"));
//console.log(cipher.decode(3, "PLFKHOH YDOHULR PDUWLQV"));


function criptografar(){
    const offset = parseInt(offsetChaveEncr.value);
    const string = ChaveMsg.value;
    ChaveMsg.value = "";
    mensagemCriptografada.value = cipher.encode(offset, string);  
    
}

btnCodificar.addEventListener("click", criptografar);


function decifrar() {
   const offset = parseInt(offsetChaveDec.value);
   const string = msgChave.value;
   msgChave.value = "";
   mensagemDecodificada.value = cipher.decode(offset, string);
}

btnDecodificar.addEventListener("click", decifrar);


function limpar(){
ChaveMsg.value = "";
msgChave.value = "";
mensagemCriptografada.value = "";
mensagemDecodificada.value = "";

    

}
btnlimpar.addEventListener("click", limpar);
