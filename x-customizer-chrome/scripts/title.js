chrome.storage.local.get(["title"], function (data) {
    if (Object.keys(data).length === 0 || data.title == "" || data.title == "X") {
        return;
    }

    const title = data.title;

    function setTitle() {
        if (document.title.endsWith('X')) {
            document.title = document.title.slice(0, -1) + title;
        }
    }

    setInterval(setTitle, 250);
});