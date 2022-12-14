const responses = [
  {
    text: "YES, JUST GO",
    color: "#1e96fc",
  },
  {
    text: "NOPE",
    color: "#fb3640",
  },
  {
    text: "MAYBE?",
    color: "#fdca40",
  },
  {
    text: "I DON'T RECOMMEND",
    color: "#7765e3",
  },
  {
    text: "IF NO THEN YES",
    color: "#6d5a72",
  },
  {
    text: "WHY NOT?",
    color: "#d138bf",
  },
  {
    text: "WHATEVER",
    color: "#f37748",
  },
  {
    text: "TRY TOMORROW",
    color: "#333333",
  },
  {
    text: 'MY DOG SAID "YES"',
    color: "#f87575",
  },
];

function getRandomResponse(lastResponse = "") {
  let random;
  do {
    random = Date.now() % responses.length;
  } while (responses[random].text === lastResponse);
  return responses[random];
}

const response = document.getElementById("response");
const icon = document.getElementById("icon");
const rerun = document.getElementById("rerun");
const label = document.getElementById("label");

function respond() {
  const { text, color } = getRandomResponse(response.innerHTML);

  response.innerHTML = text;
  response.style.color = color;
  icon.style.color = color;
  rerun.style.borderColor = color;
  label.style.color = color;
}

respond();

rerun.onclick = respond;
