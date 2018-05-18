console.log('Hello')

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});

// C'est pas bon cette ligne si ?
// Il faut que tu indente parfaitement ton code sinon on compprends plus rien
// Au pire ctrl + shift + p dans Atom, puis "auto indent", je viens de le faire ;)

document.addEventListener("DOMContentLoaded", function(event) {

  console.log("DOM fully loaded and parsed");
  const apiContainer = () => {

    // Donc l'erreur est ici ? out
    //alors je pense que ce fichier ne fait pas parti du content scripts ?
    //je dois le mettre dans le manifest? oui je pense, sinon il ne sera pas injecté dans la page web, et donc t'aura pas access à la page qwant
    //let searchForm = document.querySelector('.search_bar__form').lastChild;
    //let searchInput = document.querySelector('.search_bar__form__input').value


    const apiCall = () =>{
      searchForm.addEventListener('submit',(calls) =>{
        let searchQuery = document.querySelector('.search_bar__form__input').value
        console.log(searchQuery.value)
        getEventInfo(searchQuery.value)
        calls.preventDefault();
      })
    }

    const getEventInfo = (searchQuery) =>{
      fetch('http://192.168.27.127/api/v1/search?q='+searchQuery)
      .then(response => response.json())
      .then(response =>{
        console.log(response)
        let events = response.Search;
        let outputEvents = '';
        events.forEach = (index, event) => {

        }

      })

    }

    apiCall()
    //getEventInfo(searchInput)
  }
  apiContainer()
});
