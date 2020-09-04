// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios';


function Cards(obj) {
 

const card = document.createElement('div')
card.classList.add('card')

card.addEventListener('click', () => {
console.log(obj.headline)    
})

const headline = document.createElement('div')
headline.classList.add('headline')
headline.textContent = obj.headline

const author = document.createElement('div')
author.classList.add('author')

const imgContainer = document.createElement('div')
imgContainer.classList.add('img-container')

const image = document.createElement('img')
image.src = obj.authorPhoto

const name = document.createElement('span')
name.textContent = `By ${obj.authorName}`

card.append(headline)
card.append(author)
author.append(imgContainer)
imgContainer.append(image)
author.append(name)

return card

}

const cardEntry = document.querySelector('.cards-container')   


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
console.log(response.data.articles)

const data = response.data.articles

// cardEntry.append(Cards(response.data.articles))

for (let [key,value] of Object.entries(data)){
    value.forEach(items => {
        cardEntry.append(Cards(items))
    })
}

})

.catch(error => {
    console.log(error,"there's an error in your request")   
   })
