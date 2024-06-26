// Função para converter tempo no formato hh.mm em minutos totais
function converterParaMinutos(tempo) {
  const [horas, minutos] = tempo.split("(")[0].split(".").map(Number);
  return horas * 60 + minutos;
}

// Função para converter minutos totais de volta para o formato hh.mm
function converterParaHoraMinutos(minutos) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  return `${horas}.${minutosRestantes.toString().padStart(2, "0")}`;
}

// Função para iniciar uma nova contagem de tempo
function iniciarNovaContagem() {
  const entrada1 = prompt("Informe sua hora de entrada: (Exemplo: 12.57(2))");
  const entrada2 = prompt("Informe seu tempo a permanecer: (Exemplo: 4.01)");

  // Converter as entradas de tempo para minutos totais
  const minutosEntrada = converterParaMinutos(entrada1);
  const minutosPermanencia = converterParaMinutos(entrada2);

  // Calcular a soma dos minutos
  const somaMinutos = minutosEntrada + minutosPermanencia;

  // Converter a soma de minutos de volta para o formato hh.mm
  const resultadoHora = converterParaHoraMinutos(somaMinutos);

  // Exibir o resultado em um alerta
  const mensagem = `Hora de saída calculada: ${resultadoHora}\n\nEscolha uma opção:\n1. Iniciar outra contagem\n2. Encerrar`;
  const escolha = prompt(mensagem);

  if (escolha === "1") {
    iniciarNovaContagem(); // Reiniciar o processo
  } else if (escolha === "2") {
    // Redirecionar para a página inicial (index.html)
    window.location.href = "index.html";
  } else {
    alert("Opção inválida. Encerrando o processo.");
  }
}

// Iniciar a primeira contagem de tempo
iniciarNovaContagem();
