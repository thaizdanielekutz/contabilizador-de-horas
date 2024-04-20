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
  alert(`Hora de saída calculada: ${horaSaida}`);

  // Exibir o resultado em um prompt com opções numeradas
  const mensagem = `Hora de saída calculada: ${horaSaida}\n\nEscolha uma opção:\n1. Iniciar outra contagem\n2. Voltar à página inicial`;
  const escolha = prompt(mensagem);

  if (escolha === "1") {
    iniciarNovaContagemOuVoltar(); // Reinicia o processo
  } else if (escolha === "2") {
    // Redirecionar para a página inicial (index.html)
    window.location.href = "index.html";
  } else {
    alert(
      "Opção inválida. Por favor, escolha 1 para iniciar outra contagem ou 2 para voltar à página inicial."
    );
    iniciarNovaContagemOuVoltar(); // Solicita novamente a escolha válida
  }
}

// Inicia a primeira contagem de tempo ou voltar à página inicial
iniciarNovaContagemOuVoltar();
