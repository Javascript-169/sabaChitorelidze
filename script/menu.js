// const windowPathname = window.location.pathname;
// const navLinks = document.querySelectorAll('.navMenu a');

// navLinks.forEach(navLinks => {
//   if(navLinks.href.includes(windowPathname)) {
//     navLinks.classList.add('active');
//   }
// });

const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll('.navMenu a');

navLinks.forEach(navLinks => {
  const navLinkPathname = new URL(navLinks.href).pathname;

  if ((windowPathname === navLinkPathname)) {
    navLinks.classList.add('active')
  }
  
});
