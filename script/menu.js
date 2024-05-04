const divs = document.querySelectorAll('.active');

divs.forEach(el => {
  el.addEventListener('click', () => {
    divs.forEach(otherDiv => {
      if (otherDiv !== el) {
        otherDiv.querySelectorAll('i, span').forEach(child => {
          child.classList.remove('blue');
        });
      }
    });
    el.querySelectorAll('i, span').forEach(child => {
      child.classList.toggle('blue');
    });
  });
});
