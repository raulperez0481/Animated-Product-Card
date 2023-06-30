const colorOption1 = document.querySelector('.card__color--option1');
const colorOption2 = document.querySelector('.card__color--option2');
const card = document.querySelector('.card');
const image = document.querySelector('.card__img');

colorOption1.addEventListener('click', () => {
  image.src = 'images/shoe1.png';
  card.classList.remove('color-option2');
  card.classList.add('color-option1');
});

colorOption2.addEventListener('click', () => {
  image.src = 'images/shoe2.png';
  card.classList.remove('color-option1');
  card.classList.add('color-option2');
});
