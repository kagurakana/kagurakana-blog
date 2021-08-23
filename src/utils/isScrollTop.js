/**
 * 返回元素距离视口顶部的距离；
 * @param {HTMLElement} el 
 * @param {number} 偏移
 * @returns {boolean} 是否滚动到顶部
 */
export function isScrollTop(el, offset = 0) {
  if (!el) {
    return
  }
  return el.getBoundingClientRect().top <= offset;
}

export function isVisiable(el, offsetTop = 200) {
  if (!el) {
    return
  }
  return el.getBoundingClientRect().top < window.innerHeight &&
    el.getBoundingClientRect().top > offsetTop;
}