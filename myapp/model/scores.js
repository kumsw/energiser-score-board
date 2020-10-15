const {query}=require("../db/index");

async function addToTable(value){
  /*   const sql='INSERT INTO energiser_scores (bootcamper_name,bootcamper_id,date,gartic_score,scattegories) VALUES ($1,$2,$3,$4,$5)'; */
    const result= await query('INSERT INTO energiser_scores (bootcamper_name,bootcamper_id,date,gartic_score,scattegories) VALUES ($1,$2,$3,$4,$5)',[value.bootcamper_name,value.bootcamper_id,value.date,value.gartic_score,value.scattegories]);
    console.log(result);
    return(result);
}

/* addToTable("value"); */

async function readAllData(){
    const result= await query('SELECT * FROM energiser_scores');
    console.log(result);
    return result;
}

async function getLeaderBoard(){
    const result= await query ('SELECT bootcamper_name,gartic_score,scattegories FROM energiser_scores');
    console.log(result);
    return result;
} 

module.exports={readAllData,getLeaderBoard,addToTable};


