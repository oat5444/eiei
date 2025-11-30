// Selecting DOM Elements
const passwordDisplay = document.getElementById('passwordDisplay');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const historyList = document.getElementById('historyList');

// Theme Elements
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = themeToggleBtn.querySelector('i');
const body = document.body;

// Config
const chars = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};
let historyData = [];

// --- 1. Slider Logic ---
lengthSlider.addEventListener('input', () => {
    lengthValue.innerText = lengthSlider.value;
    lengthValue.classList.add('active');
    clearTimeout(lengthSlider.timer);
    lengthSlider.timer = setTimeout(() => {
        lengthValue.classList.remove('active');
    }, 150);
});

// --- 2. Generate Logic ---
function generatePassword() {
    const length = +lengthSlider.value;
    let allowedChars = '';
    let password = '';

    if (document.getElementById('uppercase').checked) allowedChars += chars.upper;
    if (document.getElementById('lowercase').checked) allowedChars += chars.lower;
    if (document.getElementById('numbers').checked) allowedChars += chars.number;
    if (document.getElementById('symbols').checked) allowedChars += chars.symbol;

    if (allowedChars === '') {
        showToast('Please select options!');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordDisplay.value = password;
    checkStrength(password);
    addToHistory(password);
}

// --- 3. Strength Meter Logic ---
function checkStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    strengthBar.className = 'strength-bar';
    
    if (strength <= 2) {
        strengthBar.classList.add('weak');
        strengthText.innerText = "Weak";
        strengthText.style.color = "#ff5f6d";
    } else if (strength <= 4) {
        strengthBar.classList.add('medium');
        strengthText.innerText = "Medium";
        strengthText.style.color = "#ffc371";
    } else {
        strengthBar.classList.add('strong');
        strengthText.innerText = "Strong";
        strengthText.style.color = "#28a745";
    }
}

// --- 4. History Logic ---
function addToHistory(password) {
    historyData.unshift(password);
    if (historyData.length > 3) historyData.pop();
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = '';
    historyData.forEach(pass => {
        const li = document.createElement('li');
        li.innerText = pass;
        li.title = "Click to copy";
        li.addEventListener('click', () => copyToClipboard(pass));
        historyList.appendChild(li);
    });
}

// --- 5. Copy & Toast Logic ---
copyBtn.addEventListener('click', () => {
    if (!passwordDisplay.value) return;
    copyToClipboard(passwordDisplay.value);
    
    // Icon Animation
    const icon = copyBtn.querySelector('i');
    icon.className = 'fas fa-check';
    copyBtn.classList.add('copied');
    setTimeout(() => {
        icon.className = 'far fa-copy';
        copyBtn.classList.remove('copied');
    }, 2000);
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Copied to clipboard!');
}

function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// --- 6. Theme Toggle Logic (New!) ---
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    themeIcon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
});

// Init
generateBtn.addEventListener('click', generatePassword);