const leaderBoard = document.querySelector("#leaderBoard");
const leaderBoardButton = document.querySelector("#getLeaderBoard");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", handleSubmit);
leaderBoardButton.addEventListener("click", handleClick);

function handleSubmit(event) {
  event.preventDefault();
  addBootcamper();
}

async function addBootcamper() {
  const response = await fetch(`/scores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
}

function gatherFormData() {
  const name = document.querySelector("#fname").value;
  const bootcamperId = document.querySelector("#bootcamperID").value;
  const date = document.querySelector("#date").value;
  const garticScore = document.querySelector("#garticScore").value;
  const scattegories = document.querySelector("#scattegories").value;
  return { name, bootcamperId, date, garticScore, scattegories };
}







//function to add score info
//post method inside and fetch request

// function to gather form data

//function get score board
//
