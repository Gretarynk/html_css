
const cards = document.querySelectorAll('.card');
const checkboxes = document.querySelectorAll('.form-check-input');
const basketCountElement= document.getElementById('basketCount');
let basketCount=0;





function updateBasketCount() {
  const checkedItems = document.querySelectorAll('.form-check-input:checked');
  basketCount = checkedItems.length;
  basketCountElement.textContent = basketCount;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', function(event) {
    event.stopPropagation(); 
    updateBasketCount(); 
  });
});
cards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});
