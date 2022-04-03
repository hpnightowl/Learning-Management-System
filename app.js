require("dotenv").config();

const express = require('express');
const app = express();
const mangoose = require('mongoose');

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

mangoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.render('index');
});
