/* */

function divisionEuclides() {
  let divi = Number(document.getElementById('dividendo').value);
  let disor = Number(document.getElementById('divisor').value);
  let cociente = 0;

  while (divi >= disor) {
    divi -= disor;
    cociente++;
  }

  document.getElementById('resultadoDivision').innerHTML = "El cociente es <strong>" + cociente + "</strong> y el resto es <strong>" + divi + "</strong>.";
}