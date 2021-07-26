const express = require('express');
const app = express();
const PORT = 3000;

app.use(require('cors')());

const data = {
    welcomeText: 'Привіт світ!',
    buttonText: 'Став вподобайку!',
    clickCount: 0,
};

// GET http://localhost:3000/
app.get('/', function (_, res) {
    res.send(data);
});

// POST http://localhost:3000/add-like
app.post('/add-like', function (_, res) {
    data.clickCount++;
    res.send(data);
});

app.listen(PORT, function () {
    console.log(`Сервер запустився на http://localhost:${PORT}`);
});
