const express = require('express');
const app = express();
const path = require('path');

const port = 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`bowling in 2099AD on a port even more advanced...port ${port}`));

