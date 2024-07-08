// Scroll to top on page load
window.onload = function () {
  window.scrollTo(0, 0);
};

setTimeout(() => {
  const frame = document.getElementById("myIframe");
  // Verifica se o iframe e seu conteúdo estão disponíveis
  if (frame) {
    // Seleciona todos os elementos input dentro do iframe
    var iframeDocument = frame.contentDocument || frame.contentWindow.document;

    // Agora você pode manipular o conteúdo do iframe
    const inputs = frame.contentDocument.querySelectorAll("input");

    // Itera sobre os inputs encontrados e executa alguma ação
    inputs.forEach((input) => {
      console.log(input); // Exemplo de ação: logar no console
    });
  } else {
    console.error("Iframe ou seu conteúdo não está disponível");
  }
}, 3000);
