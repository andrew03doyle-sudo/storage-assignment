
const STORAGE_KEY = "username";

const headingEl = document.getElementById("heading");
const inputEl   = document.getElementById("username");
const saveBtn   = document.getElementById("save-btn");
const clearBtn  = document.getElementById("clear-btn");
const displayEl = document.getElementById("display-name");


function updateUI(name) {
  if (name && name.trim().length > 0) {
    const clean = name.trim();
    headingEl.textContent = `Welcome, ${clean}!`;
    displayEl.textContent = `Saved name: ${clean}`;
  } else {
    headingEl.textContent = "Welcome, User!";
    displayEl.textContent = "";
  }
}


function saveName() {
  const name = inputEl.value.trim();
  if (!name) {
    displayEl.textContent = "Please enter a name before saving.";
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, name);
    updateUI(name);
    inputEl.value = "";
  } catch (err) {
    displayEl.textContent = "Could not save. Your browser may have storage disabled.";
    console.error(err);
  }
}

function clearName() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    updateUI("");
  } catch (err) {
    console.error(err);
  }
}

saveBtn.addEventListener("click", saveName);
clearBtn.addEventListener("click", clearName);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") saveName();
});

updateUI(localStorage.getItem(STORAGE_KEY));
