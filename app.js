const rsvpForm = document.getElementById('rsvp-form');
const formMessage = document.getElementById('form-message');

if (rsvpForm && formMessage) {
  rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(rsvpForm);
    const name = String(formData.get('name') || '').trim();
    const attending = formData.get('attending');

    formMessage.textContent = attending === 'yes'
      ? `Court is in session, ${name || 'counselor'}! Your RSVP has been noted.`
      : `Thank you, ${name || 'friend'}. Brittany appreciates the love.`;

    rsvpForm.reset();
  });
}
