const leaderBoard = document.querySelector("#leaderBoard");
const leaderBoardButton = document.querySelector("#getLeaderBoard");
const submitButton = document.querySelector("#submitButton");
const orderButton = document.querySelector("#orderList");
const leaderBoardRanked = document.querySelector("#leaderBoardRanked");

submitButton.addEventListener("click", handleSubmit);
leaderBoardButton.addEventListener("click", handleClick);
orderButton.addEventListener("click", orderList);

function handleSubmit(event) {
  event.preventDefault();
  addBootcamper();
}

//function to add score info
//post method inside and fetch request

async function addBootcamper() {
  const response = await fetch(`http://localhost:3000/scores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
}

// function to gather form data
function gatherFormData() {
  const bootcamper_name = document.querySelector("#fname").value;
  const bootcamper_id = document.querySelector("#bootcamperID").value;
  const date = document.querySelector("#date").value;
  const gartic_score = document.querySelector("#garticScore").value;
  const scattegories = document.querySelector("#scattegories").value;
  console.log(bootcamper_name, bootcamper_id, date, gartic_score, scattegories);
  return { bootcamper_name, bootcamper_id, date, gartic_score, scattegories };
}

//function get score board
function handleClick(event) {
  event.preventDefault();
  getAllScores();
}

// getting the posted scores data ( payload) and appending to the empty leaderboard (section in HTML)
async function getAllScores() {
  const response = await fetch(`http://localhost:3000/scores`);
  const { payload } = await response.json();
  (leaderBoard.innerHTML = ""), console.log(payload);
  payload.forEach(appendScoreData);
}

// appending the score Block to the leaderboard
function appendScoreData(scores) {
  const scoreBlock = createScoresBlock(scores);
  leaderBoard.appendChild(scoreBlock);
  /* console.log(leaderBoard); */
}

// this function creates the block and appends the data to the article section
function createScoresBlock({
  bootcamper_name,
  bootcamper_id,
  date,
  gartic_score,
  scattegories,
}) {
  const article = document.createElement("article");
  let h2BootcamperName = document.createElement("h2");
  h2BootcamperName.innerText = `Bootcamper: ${bootcamper_name}`;
  const h3BootcamperId = document.createElement("h3");
  h3BootcamperId.innerText = `Id: ${bootcamper_id}`;
  const h3Date = document.createElement("h3");
  h3Date.innerText = `Date: ${date}`;
  const h3GarticScore = document.createElement("h3");
  h3GarticScore.innerText = `Gartic Score: ${gartic_score}`;
  const h3Scattegories = document.createElement("h3");
  h3Scattegories.innerText = `Scattegories Score: ${scattegories}`;
  article.appendChild(h2BootcamperName);
  article.appendChild(h3BootcamperId);
  article.appendChild(h3Date);
  article.appendChild(h3GarticScore);
  article.appendChild(h3Scattegories);
  return article;
}

getAllScores();

// sort the array using the .sort() array method. Sort by a the highst combined score of gartic and scatt.
async function orderList() {
  const response = await fetch(`http://localhost:3000/scores`);
  const { payload } = await response.json();
  const array = payload;
  /* console.log(array); */
  const orderedArray = array.sort(compare);
  console.log(orderedArray);
  return orderedArray;
}
orderList();

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const garticA = a.gartic_score;
  const garticB = b.gartic_score;

  let comparison = 0;
  if (garticA > garticB) {
    comparison = -1;
  } else if (garticA < garticB) {
    comparison = 1;
  }
  return comparison;
}

/*   function appendRankedScores(rankedScores) {
    /* const orderArr = orderList(); */
/*   const orderArr = createScoresBlock(rankedScores)
    leaderBoardRanked.appendChild(orderArr); */
/* console.log(leaderBoard); */
