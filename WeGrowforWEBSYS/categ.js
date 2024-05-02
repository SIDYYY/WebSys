function toggleContent(button) {
    // Find the content within the same card as the clicked button
    var content = button.parentElement.querySelector('.content');
  
    // Toggle the visibility of the content
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      button.textContent = 'Hide Ingredients and Procedure';
    } else {
      content.style.display = 'none';
      button.textContent = 'Show Ingredients and Procedure';
    }
  }
  function hideContent(card) {
    var content = card.querySelector('.content');
    content.style.display = 'none';
}
function toggleContent(button) {
    var card = button.closest('.card');
    card.classList.toggle('flipped');
}




