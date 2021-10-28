const express = require('express');
const app = express();
const gameRoutes = require('./routes/games')

app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());
app.set('view engine', 'ejs');
//Routes
app.get('/', async function(req, res) {
    res.render('index');
});

app.use('/api', gameRoutes);

//Server
const server = app.listen(app.get('port'), ()=> {
    //console.log('servidor en puerto', app.get('port'));
});

module.exports = server