document.addEventListener('DOMContentLoaded', () => {
})

window.addEventListener('load', () => {
  document.body.classList.remove('preload')
})

function elementsIsNull(...elements) {
  let isNull = false
  elements.some( (element) => {
    if (element === null) {
      isNull = true
      return isNull
    }
  });
  return isNull
}
