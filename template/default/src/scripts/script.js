// JavaScript adds interactivity to your page. Follow these comments!

document.addEventListener('DOMContentLoaded', () => {
  const modeToggleButton = document.getElementById('modeToggleButton');
  const icon = modeToggleButton.querySelector('.icon');
  const text = modeToggleButton.querySelector('.text');
  const startButton = document.getElementById('startButton');

  // Mode toggle logic
  modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
      icon.textContent = '🌙';
      text.textContent = 'Dark Mode';
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.textContent = '☀️';
      text.textContent = 'Light Mode';
      icon.style.transform = 'rotate(0deg)';
    }
  });

  // Start button logic (only on index.html)
  if (startButton) {
    startButton.addEventListener('click', () => {
      alert('Head to the src folder and edit index.html to start building!');
    });
  }
});

// Try adding more features like animated transitions or page-specific scripts!