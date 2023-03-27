const popup = document.querySelector('.popup');

window.addEventListener('click', function (e) {
  if (popup == e.target) {
    this.window.location.hash = '';
    popup.style.visibility = 'hidden';
    popup.style.opacity = 0;
    console.log(popup);
  }
});
