const habits = document.querySelectorAll(".habit");
const progressText = document.getElementById("progressText");
const lifeBar = document.getElementById("lifeBar");

console.log("🔄 Loading saved PCOD habits...");

// ===== LOAD SAVED HABITS =====
habits.forEach((box, index) => {
  const key = "pcodHabit" + index;
  const saved = localStorage.getItem(key);

  console.log(`Habit ${index + 1} saved value:`, saved);

  if (saved === "true") {
    box.checked = true;
    console.log(`✅ Habit ${index + 1} restored as checked`);
  }

  box.addEventListener("change", () => {
    localStorage.setItem(key, box.checked);
    console.log(
      `💾 Habit ${index + 1} updated:`,
      box.checked ? "Checked" : "Unchecked"
    );
  });
});

// ===== CALCULATE PROGRESS =====
function calculateProgress() {
  let completed = 0;

  habits.forEach((h, i) => {
    if (h.checked) {
      completed++;
      console.log(`✔ Habit ${i + 1} completed`);
    }
  });

  const percent = Math.round((completed / habits.length) * 100);

  lifeBar.style.width = percent + "%";
  progressText.innerText = percent + "% Healthy Habits Completed";

  console.log("📊 Total Completed Habits:", completed);
  console.log("📈 PCOD Progress:", percent + "%");

  if (percent >= 80) {
    console.log("🌟 Excellent lifestyle control");
    alert("🌟 Excellent PCOD lifestyle control!");
  } 
  else if (percent >= 40) {
    console.log("👍 Good progress");
    alert("👍 Good progress, stay consistent!");
  } 
  else {
    console.log("💗 Low progress, encouragement shown");
    alert("💗 Start slow, every step matters.");
  }
}
