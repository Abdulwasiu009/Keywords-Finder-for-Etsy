function findKeywords() {
  const input = document.getElementById("keywordInput").value.trim();
  const results = document.getElementById("results");
  const loading = document.getElementById("loading");
  
  results.innerHTML = "";
  if (input === "") {
    results.innerHTML = "<p>Please enter a keyword to search.</p>";
    return;
  }

  loading.style.display = "block";

  setTimeout(() => {
    loading.style.display = "none";

    const modifiers = [
      "for gifts", "handmade", "personalized", "unique", "vintage", "custom",
      "for her", "for him", "for kids", "printable", "digital", "minimalist",
      "boho", "rustic", "modern", "aesthetic", "bundle", "kit", "template",
      "design", "ideas", "home decor", "trending", "popular", "fast selling"
    ];

    const resultsContainer = document.getElementById("results");
    modifiers.forEach((mod) => {
      const kw = `${input} ${mod}`;
      const volume = Math.floor(Math.random() * 15000 + 500);
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
      resultsContainer.appendChild(item);
    });
  }, 1500);
}

function copyKeyword(text) {
  navigator.clipboard.writeText(text);
  alert(`Copied: ${text}`);
}

const toggleSwitch = document.getElementById("switch");
toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
