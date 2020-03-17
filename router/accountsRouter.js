const express = require('express')
const router = express.Router()
const db = require("../data/dbConfig.js")



router.use(express.json())

	router.get("/", (req,res)=>{
		db.select("*")
		.from("accounts")
		.then(recieved=>{res.status(201).json({recieved:recieved})})
		.catch(err=>{res.status(500).json({error:err})})
	})



router.post("/", validPost,(req,res)=>{
		db("accounts")
		.insert(req.body,"id")
		.then(recieved=>{res.status(201).json({recieved:recieved})})
		.catch(err=>{res.status(500).json({error:err})})
	})


router.put("/:id",(req,res)=>{
	const updates = req.body
		db("accounts")
		.where({id:req.params.id})
		.update(updates)
		.then(isFound=>{
			if(isFound<1){
			res.status(404).json({error:"Account Not Found!"})
			}else{
			res.status(201).json({successfull:"updated successfully!"})
			}
		})
		.catch(err=>{res.status(500).json({error:err})})
	})




router.delete("/:id",(req,res)=>{
		db("accounts")
		.where({id:req.params.id})
		.del()
		.then(isFound=>{
			if(isFound===0){
			res.status(404).json({error:"Account Not Found!"})
			}else{
				res.status(201).json({successfull:"deleted successfully!"})
			}
			
		})
		.catch(err=>{res.status(500).json({error:err})})
	})




//middleware 

function validPost(req,res,next){
			if(!req.body ||
				!req.body.name ||
				!req.body.budget){
				res.status(400).json({error:"input error"})
			}else{
				next() 
			}
}


	module.exports = router
