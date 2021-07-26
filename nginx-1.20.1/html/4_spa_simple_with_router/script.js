const instance = document.getElementById('app');

const data = {
    welcomeText: 'Привіт світ!',
    description: 'Сторінка 2',
    buttonText: 'Став вподобайку!',
    prevButtonText: 'На головну',
};

window.onload = render;

const pages = {
    '/4_spa_simple_with_router/': () => `
        <div class="container">
            <h1>${data.welcomeText}</h1>
            <button id="likeButton">${data.buttonText}</button>
        </div>
    `,
    '/another_page': () => `
        <div class="container">
            <img src="/4_spa_simple_with_router/Like_animation.gif" alt="">
            <h2>${data.description}</h2>
            <button id="prevButton">${data.prevButtonText}</button>
        </div>
    `,
    404: () => `
        <div class="container">
            <h1>404 Сторінку не знайдено</h1>
        </div>
    `
}

// Функція для "відмальовування" контенту
function render() {
    if (window.location.pathname in pages) {
        instance.innerHTML = pages[window.location.pathname]();
    } else {
        instance.innerHTML = pages[404]();
    }

    initListeners();
}

// Функція для обробки подій
function initListeners() {
    const likeButton = document.getElementById('likeButton');
    const prevButton = document.getElementById('prevButton');

    likeButton && likeButton.addEventListener('click', function() {
        window.history.pushState({}, 'anotherPage', '/another_page');
        render();
    });

    prevButton && prevButton.addEventListener('click', function() {
        data.welcomeText = `Ми знову на головній`;
        window.history.pushState({}, 'Welcome page', '/4_spa_simple_with_router/');
        render();
    });
}
