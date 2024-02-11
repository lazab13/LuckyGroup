let input = document.querySelector('.form__input');
let reg = /[!@#$%^&*()]/;

search.oninput = function() {
  this.value = this.value.replace(reg, '');
}
