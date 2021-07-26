const instance = document.getElementById('app');

const data = {
    welcomeText: 'Привіт світ!',
    description: 'Це мій перший SPA сайт',
    buttonText: 'Став вподобайку!',
    clickCount: 0,
};

window.onload = render;

// Функція для "відмальовування" контенту
function render() {
    const {
        welcomeText,
        description,
        buttonText,
    } = data;

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
        data.clickCount++;
        data.description = `Ви натиснули вподобайку ${data.clickCount} разів`;
        render();
    });
}
