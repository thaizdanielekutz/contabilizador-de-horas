// Função para converter tempo no formato hh.mm em minutos totais
function converterParaMinutos(tempo) {
  const [horas, minutos] = tempo.split(".").map(Number);
  return horas * 60 + minutos;
}

// Função para converter minutos totais em tempo no formato hh.mm
function converterParaHoraMinutos(minutos) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  return `${horas}.${minutosRestantes}`;
}

// Função principal que calcula a hora de saída somando com o tempo de permanência
function calcularHoraSaida(horaSaida, tempoPermanencia) {
  const minutosSaida = converterParaMinutos(horaSaida);
  const minutosPermanencia = converterParaMinutos(tempoPermanencia);
  const minutosTotais = minutosSaida + minutosPermanencia;
  return converterParaHoraMinutos(minutosTotais);
}

// Solicitar entrada de dados ao usuário
const entrada1 = prompt("Informe sua hora de saída: (Exemplo: 11.27)");
const entrada2 = prompt("Informe seu tempo de almoço: (Exemplo: 1.30)");

// Calcular a hora de saída
const horaSaida = calcularHoraSaida(entrada1, entrada2);

// Exibir o resultado para o usuário
alert(`Hora de voltar ao trabalho é: ${horaSaida}`);
