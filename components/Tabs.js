// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios';


axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {
console.log(response.data)    
})

.catch(error => {
 console.log(error,"there's an error in your request")   
})

function Topics() {

const topicEntry = document.querySelector('.topics')       

const javascript = document.createElement('div')
javascript.classList.add('tab')
javascript.textContent = "JavaScript"

const bootstrap = document.createElement('div')
bootstrap.classList.add('tab')
bootstrap.textContent = "BootStrap"

const technology = document.createElement('div')
technology.classList.add('tab')
technology.textContent = "Technology"

const jquery = document.createElement('div')
jquery.classList.add('tab')
jquery.textContent = "Jquery"

const nodejs = document.createElement('div')
nodejs.classList.add('tab')
nodejs.textContent = "node.js"

topicEntry.append(javascript)
topicEntry.append(bootstrap)
topicEntry.append(technology)
topicEntry.append(jquery)
topicEntry.append(nodejs)

return topicEntry

}

Topics()

 