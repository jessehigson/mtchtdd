import scrollTo from './scroll-to'

/**
 * Smoothly scroll to an element on the page
 *
 * @param {HTMLElement} element
 * @param {Number} duration
 *
 * @return {void}
 */
export default function scrollToElement(element, duration = 1000) {
  scrollTo(element.getBoundingClientRect().top + window.pageYOffset, duration)
}
