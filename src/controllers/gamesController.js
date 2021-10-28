/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
const game = require('../models/gameModel');

const saveGame = async (gameData) => await game.newGame(gameData)
  .then((neoGame) => {
    return neoGame;
  })
  .catch((err) => {
    return err;
  });

module.exports = { saveGame };
