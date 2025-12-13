document.addEventListener('DOMContentLoaded', () => {
  slideToggle()
})

function slideToggle() {
  const DURATION_DEFAULT = 500
  const EASE_DEFAULT = 'cubic-bezier(0.075, 0.82, 0.165, 1)'
  const triggerEls = document.querySelectorAll('[data-slide-toggle]')

  triggerEls.forEach((triggerEl) => {
    const targetId = triggerEl.dataset.slideToggle
    const targetEl = document.getElementById(targetId)

    if (elementsIsNull(targetEl)) return

    const updateIcon = (process = 'up') => {
      const iconUpEl = document.querySelector(`[data-slide-toggle-icon-up="${targetId}"]`)
      const iconDownEl = document.querySelector(`[data-slide-toggle-icon-down="${targetId}"]`)

      if (elementsIsNull(iconUpEl, iconDownEl)) return

      if (process === 'up') {
        iconUpEl.dataset.toggleFade = ''
        iconDownEl.dataset.toggleFade = 'active'
      } else {
        iconUpEl.dataset.toggleFade = 'active'
        iconDownEl.dataset.toggleFade = ''
      }
    }

    const down = () => {
      if (targetEl.classList.contains('progress')) return // NOTE: アニメーション中は実行しない

      updateIcon('down')

      targetEl.style.removeProperty('display')
      let display = window.getComputedStyle(targetEl).display
      if (display === 'none') {
        display = 'block'
      }
      targetEl.style.display = display
      const height = targetEl.offsetHeight
      targetEl.style.overflow = 'hidden'
      targetEl.style.height = 0
      targetEl.style.paddingTop = 0
      targetEl.style.paddingBottom = 0
      targetEl.style.marginTop = 0
      targetEl.style.marginBottom = 0
      targetEl.style.opacity = 0
      targetEl.offsetHeight
      targetEl.style.transitionProperty = 'height, margin, padding, opacity'
      targetEl.style.transitionDuration = DURATION_DEFAULT + 'ms'
      targetEl.style.transitionTimingFunction = EASE_DEFAULT
      targetEl.style.height = height + 'px'
      targetEl.style.opacity = 1
      targetEl.style.removeProperty('padding-top')
      targetEl.style.removeProperty('padding-bottom')
      targetEl.style.removeProperty('margin-top')
      targetEl.style.removeProperty('margin-bottom')
      targetEl.classList.add('progress')
      setTimeout(() => {
        targetEl.style.removeProperty('height')
        targetEl.style.removeProperty('overflow')
        targetEl.style.removeProperty('transition-duration')
        targetEl.style.removeProperty('transition-property')
        targetEl.style.removeProperty('transition-timing-function')
        targetEl.style.removeProperty('opacity')
        targetEl.classList.remove('progress')
      }, DURATION_DEFAULT)
    }

    const up = () => {
      if (targetEl.classList.contains('progress')) return // NOTE: アニメーション中は実行しない

      updateIcon('up')

      targetEl.style.height = targetEl.offsetHeight + 'px'
      targetEl.offsetHeight
      targetEl.style.transitionProperty = 'height, margin, padding, opacity'
      targetEl.style.transitionDuration = DURATION_DEFAULT + 'ms'
      targetEl.style.transitionTimingFunction = EASE_DEFAULT
      targetEl.style.overflow = 'hidden'
      targetEl.style.height = 0
      targetEl.style.paddingTop = 0
      targetEl.style.paddingBottom = 0
      targetEl.style.marginTop = 0
      targetEl.style.marginBottom = 0
      targetEl.style.opacity = 0
      targetEl.classList.add('progress')
      setTimeout(() => {
        targetEl.style.display = 'none'
        targetEl.style.removeProperty('height')
        targetEl.style.removeProperty('padding-top')
        targetEl.style.removeProperty('padding-bottom')
        targetEl.style.removeProperty('margin-top')
        targetEl.style.removeProperty('margin-bottom')
        targetEl.style.removeProperty('overflow')
        targetEl.style.removeProperty('transition-duration')
        targetEl.style.removeProperty('transition-property')
        targetEl.style.removeProperty('transition-timing-function')
        targetEl.style.removeProperty('opacity')
        targetEl.classList.remove('progress')
      }, DURATION_DEFAULT)
    }

    const toggle = () => {
      if (window.getComputedStyle(targetEl).display === 'none') {
        return down()
      } else {
        return up()
      }
    }

    triggerEl.addEventListener('click', () => {
      toggle()
    })

    // NOTE: 初期状態 -> open/close
    const hasActive = targetEl.querySelector('.active') !== null
    if (hasActive) {
      updateIcon('down')
      targetEl.style.display = 'block'
      targetEl.style.removeProperty('height')
      targetEl.style.removeProperty('overflow')
      targetEl.style.removeProperty('transition-duration')
      targetEl.style.removeProperty('transition-property')
      targetEl.style.removeProperty('transition-timing-function')
      targetEl.style.removeProperty('opacity')
      targetEl.classList.remove('progress')
    }
  })
}
