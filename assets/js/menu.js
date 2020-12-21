function hamburger() {
  var body = document.body;
  body.classList.toggle('open');
  document.getElementById('trigger').classList.toggle('active')
}
document.getElementById('trigger').addEventListener('click',function () {
  hamburger();
});
