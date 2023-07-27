const pickerBtn = document.querySelector('#picker-btn');
const clearBtn = document.querySelector('#clear-btn');
const colorList = document.querySelector('.all-colors');
const exportBtn = document.querySelector('#export-btn');

// Retrieving picked colors from localstorage or initializing an empty array
let pickedColors = JSON.parse(localStorage.getItem('color-list')) || [];

// Variable to keep track of the current color popup
let currentPopup = null;

// Function to copy text to the clipboard
const copyToClipboard = async (text,element) => {
    try {
        await navigator.clipboard.writeText(text);
        element.innerText = 'Copied !';
        // Resseting element text after 1 second
        setTimeout(() => {
            element.innerText = text;
        },1000);

    } catch(error) {
        alert('Filed to copy text!');
    }
};

// Function to export colors as text file
const exportColors = () => {
    const colorText = pickedColors.join('\n');
    const blob = new Blob([colorText], {type:'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Colors.txt';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
};
