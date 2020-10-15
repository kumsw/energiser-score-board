var express = require('express');
var router = express.Router();


//importing functions from scores 

const {readAllData,getLeaderBoard,addToTable} = require("../model/scores");

router.get("/", async function(req, res){
  console.log("hello")
  const data = await readAllData();
  res.json({success: true, payload: data});
 });

// post request

 router.post("/", async function(req, res){
   const id = await addToTable(req.body)
   console.log(id)
   res.json({success: true , payload: id})
 })


module.exports = router;
