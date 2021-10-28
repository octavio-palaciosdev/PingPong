const express = require('express');

const games = express.Router();
const gamesController = require('../controllers/gamesController');

games.post('/savegame', async (req, res) => {
  const { gameData } = req.body;

  await gamesController.saveGame(gameData)
    .then((neoGame) => res.status(201).json({ data: neoGame }))
    .catch((err) => res.status(500).json(err));
});

module.exports = games;
