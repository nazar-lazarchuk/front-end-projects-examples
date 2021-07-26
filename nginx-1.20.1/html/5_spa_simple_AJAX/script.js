const instance = document.getElementById('app');

// Тут зберігаємо наші дані. По замовчуванню об'єкт без ключів і значень
const data = {};

// Створюємо GET-запит 
fetch('http://localhost:3000/')
    .then(response => response.json()) // хочемо отримати з тексту відповіді JSON-об'єкт
    .then(responseData => Object.assign(data, responseData)) // коли все ОК, зберігаємо результат в змінну data
    .then(() => render()); // а тоді малюємо наш інтерфейс

function render() {
    const {
        welcomeText,
        buttonText,
        clickCount,
    } = data;

    const description = `Ви натиснули вподобайку ${clickCount} разів`;

    instance.innerHTML = `
        <div class="container">
            <h1>${welcomeText}</h1>
            <p>${description}</p>
            <button id="likeButton">${buttonText}</button>
        </div>
    `;

    initListeners();
}

// Функція для обробки подій
function initListeners() {
    const likeButton = document.getElementById('likeButton');
    
    likeButton.addEventListener('click', function() {
        fetch('http://localhost:3000/add-like', { method: 'POST' })
            .then(response => response.json())
            .then(responseData => Object.assign(data, responseData))
            .then(() => render());
    });
}
