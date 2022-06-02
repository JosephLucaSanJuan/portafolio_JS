/*  */

function numeroMes() {
  let num = Number(document.getElementById('nuMes').value);
  let mes = "";

  if (num==1) {
    mes = "enero";
  } else if (num==2) {
    mes = "febrero";
  } else if (num==3) {
    mes = "marzo";
  } else if (num==4) {
    mes = "abril";
  } else if (num==5) {
    mes = "mayo";
  } else if (num==6) {
    mes = "junio";
  } else if (num==7) {
    mes = "julio";
  } else if (num==8) {
    mes = "agosto";
  } else if (num==9) {
    mes = "septiembre";
  } else if (num==10) {
    mes = "octubre";
  } else if (num==11) {
    mes = "noviembre";
  } else if (num==12) {
    mes = "diciembre";
  } else {
    mes = "\nerror. el número introducido no corresponde a ningún mes";
  }
  
  document.getElementById('mes').innerHTML = "El mes elegido es: <strong>" + mes + "</strong>.";
}