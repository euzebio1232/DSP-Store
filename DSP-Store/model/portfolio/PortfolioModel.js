const db = require('../../database/db_connect');

module.exports = class PortfolioModel{
    static getTodos(callback){
        return db.query("SELECT * FROM portfolio", callback);
    }
}