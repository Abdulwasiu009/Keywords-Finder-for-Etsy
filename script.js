function findKeywords() {
  const input = document.getElementById("keywordInput").value.trim();
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (input === "") {
    results.innerHTML = "<p>Please enter a keyword to search.</p>";
    return;
  }

  const sampleKeywords = [
    `${input} for gifts`,
    `handmade ${input}`,
    `${input} ideas`,
    `${input} personalized`,
    `${input} decor`,
    `${input} unique`,
    `custom ${input}`,
    `${input} set`,
  ];

  sampleKeywords.forEach((kw) => {
    const volume = Math.floor(Math.random() * 9000 + 1000);
    const competition = ["Low", "Medium", "High"][Math.floor(Math.random() * 3)];
    const trend = Math.floor(Math.random() * 100);

    const item = document.createElement("div");
    item.className = "keyword-item";
    item.innerHTML = `
      <div class="keyword-top">
        <strong>${kw}</strong>
        <button onclick="copyKeyword('${kw}')">Copy</button>
      </div>
      <div class="metrics">
        <span>🔍 ${volume} searches/mo</span>
        <span>⚖️ ${competition} competition</span>
        <span>📈 Trend: ${trend}%</span>
      </div>
      <div class="bar">
        <div class="bar-fill" style="width: ${trend}%;"></div>
      </div>
    `;
    results.appendChild(item);
  });
}

function copyKeyword(text) {
  navigator.clipboard.writeText(text);
  alert(`Copied: ${text}`);
}

// Dark Mode Toggle
const toggleSwitch = document.getElementById("switch");
toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
