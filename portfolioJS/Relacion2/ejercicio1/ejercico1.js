/** 
 * 
 * 
 */

function cambioCromatico() {
  let parrafos = document.getElementsByTagName('p');
  let fondo = document.getElementsByTagName('body');
  let titulo = document.getElementsByTagName('h1');

  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "yellow";
  }

  for (let i=0; i<fondo.length; i++) {
    fondo[i].style.backgroundColor="black";
  }

  for (let i = 0; i < titulo.length; i++) {
    titulo[i].style.color = "yellow";
  }
}


function fondo() {
  let parrafos = document.getElementsByTagName('p');
  let fondo = document.getElementsByTagName('body');
  let titulo = document.getElementsByTagName('h1');

  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "chartreuse";
  }

  for (let i=0; i<fondo.length; i++) {
    fondo[i].style.backgroundColor="purple";
  }

  for (let i = 0; i < titulo.length; i++) {
    titulo[i].style.color = "chartreuse";
  }
}