import LiveNodeList from 'live-node-list'

export const modifierElements = target => {
  const modifierElements = new LiveNodeList('[data-header-modifier]')

  if (modifierElements.current && target != null) {
    return
  }

  let i = modifierElements.items.length - 1
  let el = modifierElements.items[i]

  while (
    el &&
    el.getBoundingClientRect().top >
      150 + parseInt(el.dataset.headerModifierOffset || 0)
  ) {
    i--
    el = modifierElements.items[i]
  }

  let modifier = 'light'

  if (el) {
    modifier = el.dataset.headerModifier || modifier

    if (
      'headerModifierMobile' in el.dataset &&
      window.matchMedia('(max-width: 60em)').matches
    ) {
      modifier = el.dataset.headerModifierMobile
    }
  }

  requestAnimationFrame(t => {
    target.className.split(' ').forEach(className => {
      if (
        className.startsWith('header--modifier-') &&
        className !== `header--modifier-${modifier}`
      ) {
        target.classList.remove(className)
      }
    })

    if (!target.classList.contains(`header--modifier-${modifier}`)) {
      target.classList.add(`header--modifier-${modifier}`)
    }
  })
}
