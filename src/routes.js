const routes = require('express').Router();
const { User } = require("./app/models")
const SessionController = require("./app/controllers/SessionControllers")
const authMiddleware = require("./app/middleware/auth")
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get("/dashboard", (req,res)=>{

})

module.exports = routes