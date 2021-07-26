const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Конфігурації шаблонізатора 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Визначаємо потрібну нам папку для шаблонів
app.set('views', require('path').resolve(__dirname, './views'));

// GET http://localhost:3000/
app.get('/', function (_, res) {
    res.render('index', {
        layout: false,
        data: {
            message: 'Привіт світ!',
            buttonText: 'Став вподобайку!',
        },
    });
});

// GET http://localhost:3000/another-page
app.get('/another-page', function (_, res) {
    res.render('another_page', {
        layout: false,
        data: {
            description: 'Сторінка 2',
            prevButtonText: 'На головну',
        },
    });
});

app.listen(PORT, function () {
    console.log(`Сервер запустився на http://localhost:${PORT}`);
});
