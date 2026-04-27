window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  const poem = "Jamás me voy a cansar de ti. Me importas muchísimo y me encanta estar contigo. Incluso en los días difíciles, sigues siendo alguien que quiero tener cerca.";
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

