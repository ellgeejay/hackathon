document.getElementById('onOffButton').addEventListener('click', onOff);

function onOff() {
    console.log('on/off click');
}

// document.getElementById('lockForm').addEventListener('submit', submitHours)

function submitHours() {
    console.log('submit hours');
}

document.getElementById('lockButton').addEventListener('click', lock)
function lock() {
    console.log('locked');
}

console.log(document.getElementById('vQuota').value);

chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
    chrome.tabs.update(tab.id, {url: 'www.google.com'});
});