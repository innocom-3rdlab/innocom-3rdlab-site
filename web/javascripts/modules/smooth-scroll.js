document.addEventListener('DOMContentLoaded', () => {
  smoothScroll()
})

function smoothScroll() {
  const triggerEls = document.querySelectorAll('[data-href^="#"]')
  for (let i = 0; i < triggerEls.length; i++) {
    triggerEls[i].addEventListener('click', (e) => {
      const targetId = e.target.dataset.href.split('#')[1]
      const targetEl = targetId ? document.getElementById(targetId) : document.body
      const headerEl = document.querySelector('header')
      const headerHeight = elementsIsNull(headerEl) ? 0 : headerEl.offsetHeight
      const targetTop = getCoords(targetEl)
      window.scroll({
        top: targetTop.top - headerHeight,
        behavior: 'smooth'
      })
    })
  }
}

function getCoords(element) {
  const box = element.getBoundingClientRect()
  const body = document.body
  const docEl = document.documentElement
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const clientTop = docEl.clientTop || body.clientTop || 0
  const top  = box.top +  scrollTop - clientTop

  return { top: Math.round(top) }
}
