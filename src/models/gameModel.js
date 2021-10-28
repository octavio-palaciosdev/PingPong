const qy = require('../functions/globalFunctions');

const newGame = async (gameData) => {
    return new Promise(async (resolve, reject) => {
            await qy.queryPromise(`INSERT INTO games SET ?`, gameData)
            .then(() => {
                data = {
                    player1_name: gameData.player1_name,
                    player1_wins: gameData.player1_wins,
                    player2_name: gameData.player2_name,
                    player2_wins: gameData.player2_wins,
                    winner_player: gameData.winner_player,
                    win_difference: gameData.win_difference,
                    success: true, 
                    message: "Game saved", 
                    code: "20040785"
                };
                resolve (data);
            })
            .catch(err => {
                console.error(err);
                reject({ success: false, message: "Server error", code: "5004077685" });
            });      
    });
    
}

module.exports = {newGame};