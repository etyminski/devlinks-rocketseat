function toggleMode() {
  const html = document.documentElement
  // documentElement é o html em formato de objeto

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // } td isso pode ser feito em uma linha só:

  html.classList.toggle('light')

  
  // pegar a tag img
  const img = document.querySelector("#profile img") /* #profile img é o seletor */
  
  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'avatar-light')
  } else {
     // se tiver sem light mode, manter a img normal
     img.setAttribute("src", "./assets/avatar.png")
   }


}