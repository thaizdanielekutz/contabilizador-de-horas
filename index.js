const entrada1 = prompt(
  "Informe sua hora de chegada: ( 7. 26 - 7.27 - 7.28 - 7.29 - 7.31)"
);
const entrada2 = prompt(
  "Informe seu tempo a permanecer: (4.01 - 4.02 - 4.03 - 4.04)"
);

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;

alert("Resultados:\n" + "\nSoma:" + "" + soma);
