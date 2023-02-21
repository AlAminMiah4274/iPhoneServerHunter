const express = require('express');
const app = express();
const phones = require('./phones.json');
const port = 5000;

app.get('/', (req, res) => {
    res.send('look mama again 2!. iPhone hunter server is runnig !!!')
});

app.get('/phones', (req, res) => {
    res.send(phones)
});

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log('your result is:', id);

    const phone = phones.find(p => p.id === id) || {};
    res.send(phone);
});

app.listen(port, () => {
    console.log(`Server runnig on the port: ${port}`);
});