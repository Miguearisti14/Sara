window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  const poem = "Siempre voy a estar para ti. Me importas muchísimo y me encanta estar contigo. Y sobretodo en los momentos dificiles nunca voy a dejar de estar a tu lado. Te amo infinitamente";
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

