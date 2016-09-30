//10001
//00100

var ondePodemMijar = function (mictorios) {

  var saida =[];


  if (mictorios.length == 1) {
    if (mictorios[0] == false) {
      saida = [0];
    } else {
      saida = [];
    }
  } else if (mictorios.length == 2) {
    if (mictorios[0] == false && mictorios[1] == false) {

      saida = [0];
    } else {

      saida = [];
    }
  } else {


  for(var i = 0 ; i < mictorios.length ; i++) {

    if(!mictorios[i]) {

      if(i == 0) {

        if(!mictorios[i+1]) {

          mictorios[i] = true;
          saida.push(i);
        }
      } else if(i == mictorios.length-1) {

        if(!mictorios[i-1]) {

         mictorios[i] = true;
          saida.push(i); 
        }
      } else {

        if(!mictorios[i-1] && ! mictorios[i+1]) {

          mictorios[i] = true;
          saida.push(i);
        }
      }
    }
  }
}
/*
    for(var i = 0 ; i < mictorios.length ; i+=2) {
      
      

      if (!mictorios[i]) {        
        if (i != mictorios.length-1) {
          
          if (!mictorios[i+1]) {
            saida.push(i);
          }
        } else {

          if(!mictorios[i-1]) {
            saida.push(i);
          }
        }
      }
    }
  }]*/

  
  

  return saida;
}

/*var mictorioIndex = function (mictorios) {


}

var mictorioLiberado = function(mictorioIndex) {


}

var podemMijar = function (mictorios, mijoes) {
  
  var podeMijar = false;
  var micDisponiveis = 0;
  for(var i = 0; i < mictorios.length; i++) {
      if (mictorios[i] == false) {
        micDisponiveis++;
      }
  }

  if (micDisponiveis < mijoes) {
    return podeMijar;
  } else {

    //adjacencia
    for(var i = 0; i < mictorios.length; i++) {


      if(mictorios[i] == false) {

        podeMijar = true;
        break;
      }
    }

    return podeMijar;
  }
}*/
