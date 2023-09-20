function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const containers = document.querySelectorAll('.container');
  containers.forEach(function (container) {
      if (isElementInViewport(container)) {
          container.classList.add('visible');
      }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();