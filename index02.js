const entrada1 = prompt(
  "Informe sua hora de entrada: ( 12.57(2) - 12.58(1) - 12.59 - 13.01 - 13.02)"
);
const entrada2 = prompt(
  "Informe seu tempo a permanecer: (4.01 - 4.02 - 4.03 - 4.04)"
);

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;

alert("Resultados:\n" + "\nSoma:" + "" + soma);
