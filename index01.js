const entrada1 = prompt(
  "Informe sua hora de saída: ( 11.27 - 11.28 - 11.29 - 11.30 - 11.32)"
);
const entrada2 = prompt(
  "Informe seu tempo a permanecer: (1.30 - 1.31 - 1.32 - 1.33)"
);

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;

alert("Resultados:\n" + "\nSoma:" + "" + soma);
