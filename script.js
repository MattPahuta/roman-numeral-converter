const form = document.getElementById('form');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

function validateInput(strVal, intVal) {
  let errorMessage = '';
  // check for error conditions
  if (!strVal || strVal.match(/[e.]/g)) {
    errorMessage = 'Please enter a valid number';
  } else if (intVal < 1) {
    errorMessage = 'Please enter a number greater than or equal to 1';
  } else if (intVal > 3999) {
    errorMessage = 'Please enter a number less than or equal to 3999'
  } else {
    return true; // no error criteria met
  }
  // add error msg to DOM, apply styling
  output.textContent = errorMessage;
  output.classList.add('warning');

  return false; // an error has occurred
}

// Number to Roman Numeral conversion logic
function convertToRoman(num) {
  const romanNumRef = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let romanNumResult = '';
  
  for (let key in romanNumRef) {
    while (num >= romanNumRef[key]) {
      romanNumResult += key;
      num -= romanNumRef[key];
    }
  }
  return romanNumResult;
}

function handleSubmit(e) {
  e.preventDefault();
  updateUI();

}

function clearMessageOutput() {
  output.textContent = '';
  output.classList.remove('warning');
}

/* 
ToDo:
  - function to handle result/error element creation
  - use createElement to create p element with error/result
*/

function updateUI() {
  const numStr = document.getElementById('number').value;
  const numInt = Number(numStr); // convert input val string to a number

  output.classList.remove('visually-hidden');

  clearMessageOutput();

  if (validateInput(numStr, numInt)) {
    output.textContent = convertToRoman(numInt);
  }
}

form.addEventListener('submit', handleSubmit)

// *** For FCC code editor only *** //
convertBtn.addEventListener('click', () => {
  console.log('clicked')
  updateUI();
});
