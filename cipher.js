const cipher = {

  encode: function criptografar(offset, string){

  let textoCodificado = "";

   for(let i = 0; i < string.length; i++) {
     //variavel para guardar a letra codificada
     let letraCodificada = string.charCodeAt(i);
      //loop para pegar e salvar o numero na tab. ASC
      if(letraCodificada >= 65 && letraCodificada <=90){
        //variavel recebe a letra ja transformada com o valor do deslocamento
         //formula do Daniel
        letraCodificada = ((letraCodificada - 65 + offset) % 26 +65);

      }
        else if
        (letraCodificada >= 97 && letraCodificada <=122){
          letraCodificada = ((letraCodificada - 97 + offset) % 26 + 97);
        }

     //transforma o codigo de numero da tab Asc para letra e joga na variavel texto
     textoCodificado += String.fromCharCode(letraCodificada);
     
    }
    return textoCodificado;

  },

  

  decode: function descriptografar(offset, string){

    let textoCodificado = "";
  
     for(let i = 0; i < string.length; i++) {
       //variavel para guardar a letra codificada
       let letraCodificada = string.charCodeAt(i);
        //loop para pegar e salvar o numero na tab. ASC
        if(letraCodificada >= 65 && letraCodificada <=90){
          //variavel recebe a letra ja transformada com o valor do deslocamento
           //formula do Daniel
          letraCodificada = ((letraCodificada + 65 - offset) % 26 +65);
  
        }
        else if (letraCodificada >= 97 && letraCodificada <=122){
          letraCodificada = ((letraCodificada - 122 - offset) % 26 + 122);
        }

        else if (letraCodificada == 128 && letraCodificada == 135) {
            letraCodificada = ((letraCodificada - 65 - offset) % 26 + 65);

          }
       //transforma o codigo de numero da tab Asc para letra e joga na variavel texto
       textoCodificado += String.fromCharCode(letraCodificada);
       
      }
      return textoCodificado;
  
      //console.log("funcionou");
    }
  }

export default cipher;
