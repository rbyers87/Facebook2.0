import './style.css';

    const root = document.getElementById('root');

    const iframe = document.createElement('iframe');
    iframe.src = 'https://craftzone.laserpecker.net/en/';
    iframe.style.width = '100%';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';

    root.appendChild(iframe);

    function updateTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    updateTheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
