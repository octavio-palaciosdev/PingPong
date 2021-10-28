const express = require('express');
const games = express.Router();
const gamesController = require('../controllers/gamesController.js')


games.post('/savegame',async function(req, res){
    
    let gameData = req.body.gameData;

    await gamesController.saveGame(gameData)
    .then(neoGame => {
        return res.status(201).json({data:neoGame});
    })
    .catch(err =>{
        if(err.code === "5004077685") return res.status(500).json(err);
    });;
});

module.exports = games;