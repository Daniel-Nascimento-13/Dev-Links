

function toggleMode() {
  const html = document.documentElement

  // PEGAR A TAG IMG
  const img = document.querySelector("#profile img")

  // TROCAR A CLASSE DO HTML
  html.classList.toggle("light")

  // SUBSTITUIR A IMAGEM BASEADO NO TEMA
  if (html.classList.contains("light")) {

    // LIGHT MODE → IMAGEM LIGHT
    img.setAttribute("src", "./ASSETS/foto.jpeg")

  } else {

    // DARK MODE → IMAGEM DARK
    img.setAttribute("src", "./ASSETS/foto2.jpeg")

  }
}
