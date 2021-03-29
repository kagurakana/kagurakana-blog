/**
 * 返回元素距离视口顶部的距离；
 * @param {HTMLElement} el 
 * @returns {number} 是否滚动到顶部
 */
export default function (el) {
  return el.getBoundingClientRect().top <= 0;
}