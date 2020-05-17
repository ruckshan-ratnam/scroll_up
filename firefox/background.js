let  contextMenusItem = {
    "id": "SCROLL",
    "title": "Scroll up",
    "contexts": ["page"]
}

browser.runtime.onInstalled.addListener(function(){
    browser.contextMenus.create(contextMenusItem)
})

browser.contextMenus.onClicked.addListener(function(info, tab) {
    //if user clicks our context menu
    if (info.menuItemId == "SCROLL") {
        browser.tabs.executeScript({
            file:'content.js'
        })
    }
});

browser.browserAction.onClicked.addListener(function (tab) {
    browser.tabs.executeScript(tab.id, {
        file: 'content.js'
    })
})