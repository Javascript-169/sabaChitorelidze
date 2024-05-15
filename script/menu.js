const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll('.navMenu a');
const authorization = document.querySelector(`.authorization`);
const signIn = document.querySelector(`.signIn`);
const close = document.getElementById("close");

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')


navLinks.forEach(navLinks => {
  const navLinkPathname = new URL(navLinks.href).pathname;

  if ((windowPathname === navLinkPathname)) {
    navLinks.classList.add('active')
  }
  
});


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.activeS')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModalModal(modal)
  })
})

function openModal(modal) {
  if (modal === null) return
  modal.classList.add('activeS')
  overlay.classList.add('activeS')
}

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove('activeS')
  overlay.classList.remove('activeS')
}