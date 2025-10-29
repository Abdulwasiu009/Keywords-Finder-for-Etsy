:root {
  --bg-color: #f5f5f5;
  --text-color: #333;
  --accent-color: #ff9900;
  --card-bg: #fff;
  --shadow: rgba(0, 0, 0, 0.1);
}

body.dark {
  --bg-color: #121212;
  --text-color: #f5f5f5;
  --card-bg: #1e1e1e;
  --shadow: rgba(255, 255, 255, 0.05);
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
  transition: background 0.4s, color 0.4s;
}

.container {
  max-width: 750px;
  margin: 80px auto;
  background: var(--card-bg);
  box-shadow: 0 10px 30px var(--shadow);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

.highlight {
  color: var(--accent-color);
}

.subtitle {
  margin: 10px 0 25px;
  opacity: 0.8;
}

.search-box {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  min-width: 250px;
}

button {
  background: var(--accent-color);
  border: none;
  color: white;
  padding: 12px 18px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;
}

button:hover {
  background: #e68a00;
  transform: scale(1.05);
}

.results {
  margin-top: 25px;
  text-align: left;
}

.keyword-item {
  background: var(--card-bg);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 14px 16px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 15px var(--shadow);
  color: var(--text-color);
}

.keyword-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metrics {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.9rem;
  opacity: 0.9;
  flex-wrap: wrap;
}

.bar {
  height: 6px;
  background: rgba(255, 153, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
}

.bar-fill {
  height: 100%;
  background: var(--accent-color);
  width: 0;
  transition: width 1s ease;
}

.keyword-item button {
  background: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.keyword-item button:hover {
  background: var(--accent-color);
  color: white;
}

footer {
  margin-top: 30px;
  font-size: 0.9rem;
}

footer a {
  color: var(--accent-color);
  text-decoration: none;
}

/* Toggle switch */
.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
}

.toggle-label {
  display: inline-block;
  width: 50px;
  height: 25px;
  background: #ccc;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
}

.toggle-slider {
  width: 21px;
  height: 21px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 3px;
  transition: 0.3s;
}

#switch:checked + .toggle-label .toggle-slider {
  transform: translateX(25px);
  background: var(--accent-color);
}

#switch:checked + .toggle-label {
  background: #444;
}

/* Loading Spinner */
.loading {
  margin-top: 20px;
  text-align: center;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 4px solid #ccc;
  border-top: 4px solid var(--accent-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
