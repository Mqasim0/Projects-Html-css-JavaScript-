 const panels = document.querySelectorAll('.panel') // we select any thing by using query selector like class , id name of the tag

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})


const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}