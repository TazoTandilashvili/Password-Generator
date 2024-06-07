const copyText = document.getElementById('textDiv');
const range = document.getElementById('myRange');
const checkboxPropertys = document.querySelectorAll('.property-checkbox');
const slider = document.querySelector('.slider');
const valueDisplay = document.getElementById('valueDisplay');

const lowercaseChck = document.getElementById('lowercase');
const numberChck = document.getElementById('number');
const uppercaseChck = document.getElementById('uppercase');
const symbolChck = document.getElementById('symbol');
const excludeDuplicateChck = document.getElementById('exclude-duplicate');
const includeSpacesChck = document.getElementById('include-spaces');

const propertyCheckbox = document.querySelectorAll('.property-checkbox');

function copyToClipboard() {
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
}

const generatePassword = function (rangeValue) {

  rangeValue = range.value;
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const number = '1234567890';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbol = ` !"#$%&'()*+,-./:;<=>?@[\ ]^_\`{|}~`;
  const includeSpace = ' ';

  let characters = '';
  let Password = '';

  // Check the combination of checkboxes and build the character set
  if (lowercaseChck.checked) characters += lowercase;
  if (uppercaseChck.checked) characters += uppercase;
  if (numberChck.checked) characters += number;
  if (symbolChck.checked) characters += symbol;
  if (includeSpacesChck) characters += includeSpace;

  // Generate the password
  for (let i = 0; i < rangeValue; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    Password += characters[randomIndex];
  }

  copyText.value = Password;
}

function generateBtn() {
  generatePassword();
}
slider.addEventListener('input', function () {
  valueDisplay.innerText = range.value;
  generatePassword();

})
