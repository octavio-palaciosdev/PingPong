const { mysqlConnection } = require("../database/database");


const queryPromise = async (sql, args) => {
    return await new Promise((resolve, reject) => {
        
            mysqlConnection.query(sql, args, (err, rows) => {
                if (err) return reject(err);
                
                return resolve(rows);
            });
        
    });
};

module.exports = {queryPromise}