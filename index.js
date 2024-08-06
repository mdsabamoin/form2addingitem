const form = document.querySelector('form');
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.name = 'description';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description';
form.insertBefore(descriptionInput, form.querySelector('button'));

// Handle form submission to add new fruit with description
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const fruitInput = document.getElementById('fruit-to-add');
    const descriptionInputValue = document.getElementById('description').value.trim();
    const fruitName = fruitInput.value.trim();

    if (fruitName && descriptionInputValue) {
        // Create new list item
        const fruitItem = document.createElement('li');
        fruitItem.className = 'fruit';
        
        // Create fruit name and description elements
        const nameElement = document.createElement('p');
        nameElement.textContent = fruitName;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = descriptionInputValue;
        descriptionElement.style.fontStyle = 'italic'; // Use a class for styling
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            fruitItem.remove();
        });

        // Append name, description, and delete button to fruit item
        fruitItem.appendChild(nameElement);
        fruitItem.appendChild(descriptionElement);
        fruitItem.appendChild(deleteButton);

        // Append fruit item to the list
        document.querySelector('.fruits').appendChild(fruitItem);

        // Clear input fields
        fruitInput.value = '';
        descriptionInput.value = '';
    } else {
        alert('Please enter both fruit name and description.');
    }
});

const filter = document.getElementById('filter');
filter.addEventListener('keyup',(event)=>{
  const textEntered = event.target.value.toLowerCase();
  const fruit = document.getElementsByClassName('fruit');
  for(let i=0;i<fruit.length;i++){
    let firstFruit = fruit[i].firstChild.textContent.toLowerCase();
    if(firstFruit.indexOf(textEntered) === -1){
      fruit[i].style.display = 'none';
    }else{
      fruit[i].style.display = 'flex';
    }
  }
  
})
