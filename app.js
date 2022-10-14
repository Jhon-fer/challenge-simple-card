const listNumber = document.querySelector('.card-rating-number__list');
const submit = document.querySelector('.submit');
const cardContainer = document.querySelector('.card-rating-container');
const cardRating = document.querySelector('.card-rating');
const cardThankyou = document.querySelector('.card-sent');
const value = document.getElementById('rating-value');

const handleClick = (event) => {
  const ratingSelected = event.target.innerText;
  value.innerHTML = ratingSelected;
  
  const handleSend = () => {
    cardThankyou.classList.toggle('active');
    cardRating.classList.toggle('noActive');
    console.log(`You selected ${ratingSelected} out of 5`);
  }
  submit.addEventListener('click', handleSend); 
}

listNumber.addEventListener('click', handleClick);

