document.addEventListener('DOMContentLoaded', () => {
    const modeToggleButton = document.getElementById('modeToggleButton');
    const icon = modeToggleButton.querySelector('.icon');
    const text = modeToggleButton.querySelector('.text');
    modeToggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light');
      if (document.body.classList.contains('light')) {
        icon.textContent = '🌙'; text.textContent = 'Dark Mode'; icon.style.transform = 'rotate(180deg)';
      } else {
        icon.textContent = '☀️'; text.textContent = 'Light Mode'; icon.style.transform = 'rotate(0deg)';
      }
    });
  });