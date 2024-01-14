const express = require('express');
const { connect }  = require('./models');
const pokemonRouter = require('./routes/pokemons');
const app = express();
app.use('/pokemons', pokemonRouter);
app.listen(3000, () => {
    connect();
    console.log(`Server in ${port} port`);
});