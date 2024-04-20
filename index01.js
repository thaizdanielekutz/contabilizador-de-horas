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

// Função para iniciar uma nova contagem de tempo
function iniciarNovaContagem() {
  const entrada1 = prompt("Informe sua hora de saída: (Exemplo: 11.27)");
  const entrada2 = prompt("Informe seu tempo de permanência: (Exemplo: 1.30)");
  const horaSaida = calcularHoraSaida(entrada1, entrada2);

  // Exibir o resultado em um alerta com opção de retornar à página inicial
  const mensagem = `Hora de saída calculada: ${horaSaida}\n\nClique em OK para iniciar outra contagem.`;
  const confirmarNovoCalculo = confirm(mensagem);

  if (confirmarNovoCalculo) {
    iniciarNovaContagem(); // Reinicia o processo
  } else {
    // Redirecionar para a página inicial (index.html)
    window.location.href = "index.html";
  }
}

// Inicia a primeira contagem de tempo
iniciarNovaContagem();
