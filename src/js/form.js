import emailjs from '@emailjs/browser';

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('gG8XGHDepX1bUiphF');

  const form = document.getElementById('contact-form');
  const modal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      name: document.getElementById('name').value,
    };

    emailjs
      .send('service_2482erg', 'template_viskrid', formData)
      .then(function () {
        modal.classList.add('show');

        form.reset();
      })
      .catch(function (error) {
        alert('❌ Error! Please try again later.');
        console.error('Error:', error);
      });
  });

  closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('show');
  });

  modalBackdrop.addEventListener('click', function () {
    modal.classList.remove('show');
  });
});
