document.addEventListener("DOMContentLoaded", function () {
    const faviconInput = document.getElementById("faviconInput");
    const titleInput = document.getElementById("titleInput");
    const logoInput = document.getElementById("logoInput");
    const applyButton = document.getElementById("applyButton");
    const clearButton = document.getElementById("clearButton");

    browser.storage.local.get(["favicon", "title", "logo"], function (data) {
        faviconInput.value = data.favicon || "";
        titleInput.value = data.title || "";
        logoInput.value = data.logo || "";
    });

    applyButton.addEventListener("click", function () {
        const newFavicon = faviconInput.value;
        const newTitle = titleInput.value;
        const newLogo = logoInput.value;

        browser.storage.local.set(
            { favicon: newFavicon, title: newTitle, logo: newLogo },
            function () {
                browser.tabs.reload();
            }
        );
    });

    clearButton.addEventListener("click", function () {
        browser.storage.local.clear(function () {
            browser.tabs.reload();
        });
    });
});
