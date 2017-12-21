function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        profile_name: document.querySelector("#profile_name").value
    });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#profile_name").value = result.profile_name || "Profile Name";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("profile_name");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
