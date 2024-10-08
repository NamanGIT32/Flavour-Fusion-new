const express = require('express');
require('dotenv').config();
require('./Models/dbConnection.js');
const AuthRoutes = require('./Routes/AuthRouter.js');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

app.get('/ping', (req, res) => {
    res.json({ message: "Pong", status: 'ok', entry: true });
});
app.use('/auth', AuthRoutes);

app.listen(PORT, () => console.log('Server running on Port: ', PORT ));