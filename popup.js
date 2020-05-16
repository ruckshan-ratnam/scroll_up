function init_scroll_up() {
    document.getElementById("scroll_up").addEventListener('click', function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {scroll_up: "true"});
          });
    })
}

init_scroll_up()
