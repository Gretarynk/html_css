// Select all elements with the class 'card'
const cards = document.querySelectorAll('.card');

// Loop through each card and add a click event listener
cards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});
const checkboxes = document.querySelectorAll('.form-check-input');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});