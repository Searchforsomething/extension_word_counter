const countBtn = document.getElementById("countBtn");
countBtn.addEventListener("click",() => {
    chrome.tabs.query({active: true}, (tabs) => {
        const tab = tabs[0];
        chrome.scripting.executeScript(
            {
                target:{tabId: tab.id, allFrames: true},
                func:countWords
            }
        )
    })
})

function countWords() {
    var text = document.body.innerText;
    var words = text.split(/\s+/);
    var wordCount = words.length;
    alert(`Number of words on a page: ${wordCount}`);
}