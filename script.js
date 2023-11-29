let menuVisible = false

// Función que oculta / muestra el menu.
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = ""
    menuVisible = false
  } else {
    document.getElementById("nav").classList = "responsive"
    menuVisible = true
  }
}

function seleccionar() {
  // Oculta el menu cada vez que seleccionemos una opción.
  document.getElementById("nav").classList = ""
  menuVisible = false
}
