document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.nav__toggle')?.addEventListener('click', () => {
  const list = document.querySelector('.nav__list');
  list.style.display = (list.style.display === 'flex' ? 'none' : 'flex');
});
