const game = require("../models/gameModel")

const saveGame = async (gameData, res) => {
    
    return await game.newGame(gameData)
        .then(neoGame => {
            return neoGame;
        })
        .catch(err =>{
            return err;
        });
        
    }

module.exports = {saveGame};