function removeItem(){
    // Supprime le grand div parent du bouton cliqué
    this.parentNode.parentNode.remove(); 

    // Sélectionne tous les éléments hr et les supprime
    var lines = document.getElementsByTagName("hr");
    for (var i = 0; i < lines.length; i++) {
        lines[i].remove();
    }
}

// Sélectionne tous les boutons ayant la classe "remove"
var buttons = document.getElementsByClassName("remove");

// Ajoute un gestionnaire d'événements à chaque bouton
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', removeItem);
}
function toggleFavorite(button) {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        button.style.backgroundColor = 'red';
    } else {
        button.style.backgroundColor = 'green';
    }
}

function adjustQuantity(element, action) {
    var article = element.closest('.row'); // Trouver l'élément parent contenant les informations de l'article
    var input = article.querySelector('input[name="quantity"]'); // Sélectionner l'élément d'entrée de quantité spécifique à cet article
    var currentValue = parseInt(input.value);
   
    if (action === 'increase') {
        input.value = currentValue + 1;
    } else if (action === 'decrease' && currentValue > 1) {
        input.value = currentValue - 1;
    }
  // Assuming you have an array of articles

       

      // Pass the article element to the function
          updateTotal(article); 
          updateSummary()
    
        // Mettre à jour le prix total spécifique à cet article
        }

const priceElement = document.querySelector('strong span.totalAmount');
const priceText = priceElement.textContent.replace("$", "");



function updateTotal(article) {

    const priceElements = article.querySelectorAll('strong span.totalAmount');
    const quantityInput = article.querySelector('.form-outline input[type="number"]');
    const quantityValue = parseInt(quantityInput.value); 
    const totalAmount = priceText * quantityValue;
    for (const priceElement of priceElements) {
      priceElement.textContent = `$${totalAmount.toFixed(2)}`;
    }
  }

  function updateSummary() {
    const elements = document.querySelectorAll('.totalAmount'); // Get all elements with the given class
    let total = 0; // Initialize total to 0
  
    // Iterate over each element and extract its value
    for (const element of elements) {
      // Assuming the value is stored in the element's text content
      const valueString = element.textContent.replace('$', ''); // Extract and remove dollar sign
      const valueNumber = parseFloat(valueString); // Convert to a number
  
      // Add the extracted number to the total
      total += valueNumber;
    }
  
    const summaryTotalElement = document.querySelector('.total'); // Use querySelector for efficiency
  
    // Update summary total only if the element is found
    if (summaryTotalElement) {
      summaryTotalElement.innerHTML = `<strong>$${total.toFixed(2)}</strong>`; // Use innerHTML to preserve formatting
    } else {
      console.error("Summary total element with class '.total' not found!");
    }
  }
  
  
      
  
  
  
  

