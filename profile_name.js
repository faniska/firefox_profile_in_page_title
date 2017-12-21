function setTitle(result) {
    console.log(result)
    if(result.profile_name) {
        document.title = result.profile_name + ' || ' + document.title;
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

var getting = browser.storage.local.get("profile_name");
getting.then(setTitle, onError);
