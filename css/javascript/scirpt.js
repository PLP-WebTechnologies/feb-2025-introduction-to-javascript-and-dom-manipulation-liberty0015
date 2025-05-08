// DOM Elements
const elements = {
    dynamicText: document.getElementById('dynamic-text'),
    changeTextBtn: document.getElementById('change-text-btn'),
    resetTextBtn: document.getElementById('reset-text-btn'),
    styleTarget: document.getElementById('style-target'),
    colorBtn: document.getElementById('color-btn'),
    sizeBtn: document.getElementById('size-btn'),
    borderBtn: document.getElementById('border-btn'),
    itemList: document.getElementById('item-list'),
    addBtn: document.getElementById('add-btn'),
    removeBtn: document.getElementById('remove-btn'),
    toggleBtn: document.getElementById('toggle-btn'),
    demoForm: document.getElementById('demo-form'),
    nameInput: document.getElementById('name-input'),
    formOutput: document.getElementById('form-output')
};

// Text Manipulation
let originalText = elements.dynamicText.textContent;
const textOptions = [
    "Text changed successfully!",
    "You've modified the content!",
    "Dynamic text update works!",
    "JavaScript is powerful!"
];

elements.changeTextBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    elements.dynamicText.textContent = textOptions[randomIndex];
    elements.dynamicText.style.color = getRandomColor();
});

elements.resetTextBtn.addEventListener('click', () => {
    elements.dynamicText.textContent = originalText;
    elements.dynamicText.style.color = '';
});

// Style Manipulation
elements.colorBtn.addEventListener('click', () => {
    elements.styleTarget.classList.toggle('colored');
});

elements.sizeBtn.addEventListener('click', () => {
    elements.styleTarget.classList.toggle('large');
});

elements.borderBtn.addEventListener('click', () => {
    elements.styleTarget.classList.toggle('bordered');
});

// Element Manipulation
let itemCounter = 3;

elements.addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `New item ${itemCounter++}`;
    elements.itemList.appendChild(newItem);
});

elements.removeBtn.addEventListener('click', () => {
    if (elements.itemList.children.length > 0) {
        elements.itemList.removeChild(elements.itemList.lastElementChild);
        if (itemCounter > 3) itemCounter--;
    }
});

elements.toggleBtn.addEventListener('click', () => {
    elements.itemList.classList.toggle('hidden');
    elements.toggleBtn.textContent = elements.itemList.classList.contains('hidden') 
        ? 'Show List' 
        : 'Hide List';
});

// Form Interaction
elements.demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = elements.nameInput.value.trim();
    
    if (name) {
        elements.formOutput.textContent = `Hello, ${name}! Thanks for submitting.`;
        elements.formOutput.classList.remove('hidden');
        elements.formOutput.style.color = getRandomColor();
        elements.nameInput.value = '';
    } else {
        elements.formOutput.textContent = 'Please enter your name!';
        elements.formOutput.classList.remove('hidden');
        elements.formOutput.style.color = 'red';
    }
});

// Helper Function
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}