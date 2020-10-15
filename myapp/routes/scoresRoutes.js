var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//importing functions from scores 

const {readAllData,getLeaderBoard,addToTable} = require("../model/scores");

router.get("/", async function(req, res){
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
