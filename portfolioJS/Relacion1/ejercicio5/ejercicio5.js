/*
  Javascript para el ejericio 5.............
*/

function mayMin(){
  let cadena =document.getElementById("cadena").value; // cadena original
  let respuesta = ""; // la respuesta que corresponde después
  //let cadena2 = null; // cadena original; vacía, objeto null

  //cadena2 = new String(cadena.toUpperCase()) // paraa comparar en mayúsculas, crea un obbjeto con la versión mayúsculas

  if (cadena = cadena.toUpperCase()) {
    respuesta = "mayúsculas";
  } else {
    if (cadena == cadena.toLowerCase()) {
      respuesta = "minúsculas";
    } else {
      respuesta = "una mezcla de mayúsculas y minúsculas";
    }
  }

  document.getElementById("respuesta").innerHTML = "la cadena está escrita en " + respuesta;
}