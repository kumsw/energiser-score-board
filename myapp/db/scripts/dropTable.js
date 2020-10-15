const {query}=require("../index");

async function dropTable(){
    const result = await query(`DROP TABLE energiser_scores`);
    console.log("The table was dropped !!!");
}

dropTable();