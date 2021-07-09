let themeDots = document.querySelectorAll('.theme-dot');

let theme = localStorage.getItem('theme');

if (!theme) {
  setTheme('app');
} else {
  setTheme(theme);
}

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let themeMode = this.dataset.theme;
    if (!themeMode || themeMode == 'light') {
      themeMode = 'app';
    }
    setTheme(themeMode);
  })
}

function setTheme(theme) {
  if (!theme) {
    theme = 'app';
  }
  localStorage.setItem('theme', theme);
  document.getElementById('theme-style').href = `assets/css/${theme}.css`;
}