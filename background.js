let  contextMenusItem = {
    "id": "SCROLL",
    "title": "Scroll up",
    "contexts": ["page"]
}

chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create(contextMenusItem)
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    //if user clicks our context menu
    if (info.menuItemId == "SCROLL") {
        chrome.tabs.executeScript({
            file:'content.js'
        })
    }
});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 'content.js'
    })
})