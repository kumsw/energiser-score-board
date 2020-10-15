const {query}=require("../index");

const sqlStatement=`CREATE TABLE  energiser_scores( 
    id SERIAL PRIMARY KEY, 
    bootcamper_name TEXT,
    bootcamper_id INT, 
    date TEXT, 
    gartic_score INT, 
    scattegories INT
    )`;

async function createTable() {
    const result = await query(sqlStatement);
    console.log(result);
  }
  
  createTable();