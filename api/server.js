const express = require("express");
const accountsRouter = require('../router/accountsRouter.js')
const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use(logger)

server.get('/', (req,res)=>{
		res.status(200).json({status:'RUNNING....'})
})
server.use('/api/accounts', accountsRouter)


function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl} at ${new Date().toISOString()}`);

    next();
}
  

module.exports = server;
