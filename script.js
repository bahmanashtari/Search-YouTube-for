chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "init",
        title: "Search YouTubr for %s",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function (item, tab) {
    let url = 'https://www.youtube.com/results?search_query='+ item.selectionText;
    chrome.tabs.create({ url: url, index: tab.index + 1 });
});