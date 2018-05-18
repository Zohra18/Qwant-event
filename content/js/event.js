chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
  
const extentionLaunch = () => {

  let url = window.location.href
  let searchQuery = document.querySelector('.search_bar__form__input').value
  const sideBar = document.querySelector("#c_29")
  let searchBarForm = document.querySelector('.search_bar__form')
  let searchTest = document.querySelector('.search_bar__form').lastChild;
//update on submit of the result
console.log(searchBarForm)
   searchBarForm.addEventListener('submit', (calls) => {
     console.log(searchQuery)
     extentionConditions(searchQuery)
     calls.preventDefault();
     console.log(searchBarForm)
   })

//conditions to launch the extention
  const extentionConditions = (searchQuery) =>{
// conditions for the events to appear ~~
    if (url.includes(`q=${encodeURIComponent(searchQuery)}`)) {
        const sideBarContainer = document.querySelector('#c_28')
        let url = chrome.extension.getURL('content/html/background.html')
        let iframe = document.createElement('iframe');

        sideBar.style.display = "none"
        iframe.src = url
        sideBarContainer.appendChild(iframe);

      }
    else {
      console.log("BITCH")
    }
  }

extentionConditions(searchQuery)


}
extentionLaunch()
