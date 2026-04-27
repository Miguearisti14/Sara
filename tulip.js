window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  const poem = "Tu poema aparece aqui...";
  const element = document.getElementById("poem-text");

  let i = 0;

  function escribir() {
    if (i < poem.length) {
      element.innerHTML += poem.charAt(i);
      i++;
      setTimeout(escribir, 50);
    }
  }

  escribir();
};
