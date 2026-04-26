// Confetti
(function spawnConfetti() {
  const container = document.getElementById('confetti');
  const colors = ['#c9a84c', '#f0d080', '#ffffff', '#a07820', '#ffe066', '#e8d5a3'];
  const count = 60;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';

    const size = Math.random() * 8 + 4;
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size * (Math.random() > 0.5 ? 1 : 2.5)}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 8 + 6}s;
      animation-delay: ${Math.random() * 10}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    container.appendChild(el);
  }
})();

// RSVP form
function handleRSVP(e) {
  e.preventDefault();
  const form = e.target;
  const confirmation = document.getElementById('rsvp-confirmation');

  const name = form.name.value.trim();
  const attending = form.attending.value;

  if (attending === 'yes') {
    confirmation.querySelector('p').textContent =
      `🎊 We can't wait to celebrate with you, ${name}!`;
  } else {
    confirmation.querySelector('p').textContent =
      `💛 We'll miss you, ${name}! Brittany appreciates the love.`;
  }

  form.style.display = 'none';
  confirmation.hidden = false;
  confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
