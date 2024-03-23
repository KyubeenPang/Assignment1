const currentDate = new Date();
let tempDate = currentDate;


function moveToPreviousDay() {
    tempDate.setDate(tempDate.getDate() - 1);
    formattedDate();
}
function moveToNextDay() {
    let today = new Date();
    if(tempDate.getDate() < today.getDate()) {
      tempDate.setDate(tempDate.getDate() + 1);
      formattedDate();
    }   
}

let year; 
let month; 
let day; 

function formattedDate() {
  year = tempDate.getFullYear();
  month = tempDate.getMonth() + 1;
  day = tempDate.getDate();

  let format = month + '/' + day + '/' + year;
  document.querySelector('.date-specify').textContent = format;  
}

formattedDate();
document.querySelector('.date-button1').addEventListener('click', moveToPreviousDay);
document.querySelector('.date-button2').addEventListener('click', moveToNextDay);

// ----------------------------------------------------------------

let worksheet = JSON.parse(localStorage.getItem('questionary'));
worksheet = worksheet.reverse();

const formElement = document.querySelector('#my-form');

worksheet.forEach(item => {

    let template, work;

    if (item.selectedOption === 'Number') {
        template = document.getElementById('inputNum');
    } else if (item.selectedOption === 'Boolean') {
        template = document.getElementById('inputBool');
    } else if (item.selectedOption === 'Text') {
        template = document.getElementById('inputText');
    }

    work = template.cloneNode(true);
    work.style.display = 'block';

    
    work.querySelector('.form-label').textContent = item.title;

    formElement.insertBefore(work, formElement.firstElementChild);
  

    
});



