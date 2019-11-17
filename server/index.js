const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Data received from the server');
});

app.listen('9091', () => {
    console.log('Server is listening on port 9091');
});
