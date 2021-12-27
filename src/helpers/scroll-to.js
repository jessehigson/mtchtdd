import animate from '../utils/animate'
import { easeInOutCubic } from '../utils/easing-functions'

/**
 * Smoothly scroll to an element on the page
 *
 * @param {HTMLElement} element
 * @param {Number} duration
 *
 * @return {void}
 */
export default function scrollTo(top, duration = 1000) {
  animate(
    window.scrollY,
    top,
    t => {
      window.scrollTo({
        top: t,
        left: 0,
      })
    },
    duration,
    easeInOutCubic,
  )
}
