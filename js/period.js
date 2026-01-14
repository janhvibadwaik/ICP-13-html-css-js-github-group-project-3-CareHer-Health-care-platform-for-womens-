const dateSpan = document.getElementById("dateSpan");
const timeSpan = document.getElementById("timeSpan");

function updateClock() {
  const now = new Date();

  dateSpan.innerText = now.toDateString();
  timeSpan.innerText = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

function calculateCycle() {
  const age = parseInt(document.getElementById("age").value);
  const lastPeriodInput = document.getElementById("lastPeriod").value;
  const cycleLength = parseInt(document.getElementById("cycleLength").value);
  const periodDuration = parseInt(document.getElementById("periodDuration").value);
  const flowDesc = document.getElementById("flowIntensity").value;
  const moodDesc = document.getElementById("moodSwings").value;

  if (!lastPeriodInput || !age || !cycleLength || !periodDuration) {
    document.getElementById("results").innerHTML = "<p>Please fill all required fields.</p>";
    document.getElementById("regularityButton").style.display = "none";
    return;
  }

  const lastPeriod = new Date(lastPeriodInput);

  // Calculate next period, ovulation, luteal phase
  const nextPeriod = new Date(lastPeriod);
  nextPeriod.setDate(lastPeriod.getDate() + cycleLength);

  const ovulationDay = new Date(nextPeriod);
  ovulationDay.setDate(nextPeriod.getDate() - 14);

  const lutealStart = new Date(ovulationDay);
  lutealStart.setDate(ovulationDay.getDate() + 1);


  let regularity = "Regular";
  let buttonClass = "regular";
  let targetPage = "regular.html";
  if (cycleLength < 21 || cycleLength > 35) {
    regularity = "Irregular";
    buttonClass = "irregular";
    targetPage = "irregular.html";
  }

  // Show results
  document.getElementById("results").innerHTML = `
    <h3>Cycle Insights</h3>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Next Period:</strong> ${nextPeriod.toDateString()}</p>
    <p><strong>Ovulation Day:</strong> ${ovulationDay.toDateString()}</p>
    <p><strong>Luteal Phase:</strong> ${lutealStart.toDateString()} – ${new Date(nextPeriod - 86400000).toDateString()}</p>
    <p><strong>Flow Intensity:</strong> ${flowDesc}</p>
    <p><strong>Mood Swings:</strong> ${moodDesc}</p>
  `;

  // Set up regularity button
  const btn = document.getElementById("regularityButton");
  btn.style.display = "block";
  btn.className = buttonClass;
  btn.textContent = regularity;
  btn.onclick = function() {
    window.location.href = targetPage;
  };

  // Calendar rendering
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";
  for (let i = 0; i < cycleLength; i++) {
    const day = new Date(lastPeriod);
    day.setDate(lastPeriod.getDate() + i);

    let className = "normal";
    if (i < periodDuration) className = "period";
    else if (day.toDateString() === ovulationDay.toDateString()) className = "ovulation";
    else if (day >= lutealStart && day < nextPeriod) className = "luteal";

    calendar.innerHTML += `
      <div class="${className}">
        ${day.getDate()}<br>
        ${day.toLocaleString("default", { month: "short" })}
      </div>
    `;
  }
}

function toggleChatbot() {
  const chatbot = document.getElementById("chatbot-popup");

  if (chatbot.style.display === "none" || chatbot.style.display === "") {
    chatbot.style.display = "block";
  } else {
    chatbot.style.display = "none";
  }
}
