//Imports
const express = require('express');
const index = require('./routes/index');
const pokemon = require('./routes/pokemon');
const mysql = require('mysql');

//Set hosting info
const hostname = '127.0.0.1';
const port = 3000;

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pokemonteam'
};

//Create DB connection
const db = mysql.createConnection(dbConfig);

//Connection callback for DB
function connectCallback(error){
    if (error) {
        throw error;
    }

    console.log('Connected to the database')
    
    //Testing
    db.query(`SELECT * FROM pokemen`, function(error, results) {
        console.log(results);
    })
}

db.connect(connectCallback);

//Set global db variable
global.db = db;

//Initialize
let app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

//Set routes
app.get('/', index.getHomePage);
app.get('/add', pokemon.addPokemonPage);
app.get('/edit/:id', pokemon.editPokemonPage);
app.get('/delete/:id', pokemon.deletePokemon);
app.post('/add', pokemon.addPokemon);
app.post('/edit/:id', pokemon.editPokemon);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);