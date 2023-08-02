chrome.storage.local.get(["favicon"], function (data) {
    if (Object.keys(data).length === 0 || data.icon == "" || data.icon == "X") {
        return;
    }

    const icon = data.favicon;

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }

    if (icon == "Twitter" || icon == "twitter") {
        link.href = "https://abs.twimg.com/favicons/favicon.ico";
    } else {
        link.href = icon;
    }
});