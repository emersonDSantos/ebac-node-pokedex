const express = require('express');
const path = require('path');
const { connect, Pokemon }  = require('./models');
const app = express();
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/pokemons', require('./routes/pokemons'));
app.listen(port, () => {
    connect();
    console.log(`Server in ${port} port`);
});