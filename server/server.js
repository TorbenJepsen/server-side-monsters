const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

const array = require('./monster_module');

app.get('/monsters', (req,res) => {
    res.send(array);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
