let plusButton = document.getElementById('plusButton');
let counter = 4;
let questionary = [];

document.addEventListener("DOMContentLoaded", function() {
  plusButton.addEventListener('click', () => {
  
    const question = document.getElementById('question0');
    const newQuestion = question.cloneNode(true);
    newQuestion.id = `question${counter}`;
    newQuestion.style.display = 'block';
    
  
    
    const buttonSet = newQuestion.querySelector('.deleteButton');
    buttonSet.id = `deleteButton${counter}`; 
  
    counter++;
    
    const formElement = document.querySelector('#my-form');
    formElement.insertBefore(newQuestion, formElement.firstElementChild);
    
  });
});
// plusButton.addEventListener('click', () => {
  
//   const question = document.getElementById('question0');
//   const newQuestion = question.cloneNode(true);
//   newQuestion.id = `question${counter}`;
//   newQuestion.style.display = 'block';
  

  
//   const buttonSet = newQuestion.querySelector('.deleteButton');
//   buttonSet.id = `deleteButton${counter}`; 

//   counter++;
  
//   const formElement = document.querySelector('#my-form');
//   formElement.insertBefore(newQuestion, formElement.firstElementChild);
  
// });

document.querySelectorAll('.deleteButton').forEach(button => {
  button.addEventListener('click', event => {
    const container = event.target.closest('.container2');
    if (container) {
      container.remove();
    }
  });
});


document.querySelector('#my-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const containers = document.querySelectorAll('.container2');    
  questionary = [];
  
    // 각 container2 요소를 검사하여 display 속성이 none이 아닌 경우에만 배열에 추가
  containers.forEach(container => {
    if (container.style.display !== 'none') {

      const title = container.querySelector('input').value;
      const selectedOption = container.querySelector('select').value;
      
      
      questionary.push({
        title: title,
        selectedOption: selectedOption,
      });
    }
  });

  localStorage.setItem('questionary', JSON.stringify(questionary));
  alert('submitted');
  console.log(questionary);
  
})


