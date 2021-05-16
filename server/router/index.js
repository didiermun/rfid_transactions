const controllers = require('../controller')
module.exports = (app) => {
  app.get("/api/cards", controllers.AllCards);
  app.get("/api/cards/:uuid", controllers.checkCard);
  app.post("/api/cards", controllers.newCard);
  app.get("/api/transactions", controllers.getAllTransactions);
  app.get("/api/transactions/:uuid", controllers.getRFIDTransactions)
  app.post("/api/transactions", controllers.newTransaction)
};
