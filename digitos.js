const saida = document.querySelectorAll(".digitos");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida[0].textContent += texto.charAt(contador);
      contador++;

      digitacao(texto, contador);
    }, 90);
  }
}

digitacao(" Hey, I'm Ariston Cândido, nice to meet you.", -10);

function digitacao_p(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida[1].textContent += texto.charAt(contador);
      contador++;

      digitacao_p(texto, contador);
    }, 100);
  }
}

digitacao_p(" Jr. Developer and Pentest Student", -55);
