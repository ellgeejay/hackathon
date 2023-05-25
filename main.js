document.getElementById('onOffButton').addEventListener('click', onOff);

function onOff() {
    alert('When fully implemented, this button will turn the blocker on and off')
}

document.getElementById('lockForm').addEventListener('submit', submitHours);

function submitHours() {
    console.log('submit hours');
    alert("In the future, pressing submit will start a counter that tracks how many YouTube videos you are allowed to watch before YouTube is blocked for 24 hours.")
}

document.getElementById('lockButton').addEventListener('click', lock)
function lock() {
  alert("We look forward to bringing the lock button feature to its fully functional state where it locks the On/Off button, which prevents you from turning off your YouTube block for the next 24 hours.")
}

document.getElementById('FAQ').addEventListener('click', questionsAnswered);
function questionsAnswered() {
  alert("We ran into all kinds of problems when trying to implement the chrome.tabs API, which would have been necessary to make our extension functional. However, it is important to note that we tried really really hard to make this extension work.")
}

console.log(document.getElementById('vQuota').value);

// code to obtain URL of current tab using chrome.tabs API
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  console.log(tabs[0].url);
});


// if current url === youtube.com/watch && watchCount > 3...
  // Redirect to a blocked page
  // chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
  //     chrome.tabs.update(tab.id, {url: 'www.google.com'});
  // });