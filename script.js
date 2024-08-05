const numberInput = document.getElementById('number');
const form = document.getElementById('form');
const output = document.getElementById('output');

function handleMessaging(value) {
  // if button clicked with no value in numberInput
  // - return 'Please enter a valid number'
  // if numberInput contains a negative number
  // - return 'Please enter a number greater than or equal to 1
  // if numberInput contains a number >= 4000
  // - return 'Please enter a number less than or equal to 3999
  let errorMessage = '';
  
  if (value === 0) {
    errorMessage = 'Please enter a valid number';
  } else if (value < 0) {
    errorMessage = 'Please enter a number greater than or equal to 1';
  } else if (value >= 4000) {
    errorMessage = 'Please enter a number less than or equal to 3999'
  } else {
    return;
  }
  return errorMessage;
}

function convertToRoman(num) {
  const reference = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const result = [];

  reference.forEach((arr) => {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1]
    }
  })
  return result.join('');
}


function handleSubmit(e) {
  e.preventDefault();

  const inputValue = Number(numberInput.value);
  console.log('inputValue: ', inputValue)

  const result = convertToRoman(inputValue);
  output.innerText = result;

  // output.textContent = handleMessaging(inputValue)
  


}

form.addEventListener('submit', handleSubmit)