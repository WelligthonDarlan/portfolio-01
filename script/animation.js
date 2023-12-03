function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}


const target = document.querySelectorAll('[data-animate]')
const classAnimate = 'on'

function animateScroll() {

  const windowTop = window.scrollY + ((window.innerHeight * 3.5) / 4)

  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(classAnimate)
    } else {
      element.classList.remove(classAnimate)
    }
  })
}

animateScroll()

window.addEventListener('scroll', debounce(function () {
  animateScroll()
}, 200))

