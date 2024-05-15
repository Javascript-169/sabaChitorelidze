const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll('.navMenu a');
const authorization = document.querySelector(`.authorization`);


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
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
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('actives')
  overlay.classList.add('actives')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('actives')
  overlay.classList.remove('actives')
}