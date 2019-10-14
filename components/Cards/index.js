// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data); //objects- not articles- just titles?
        createCard(response.data);
    })
    .catch(error => {
        console.error(error)
    });

// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');
console.log(cardContainer);

function createCard(data) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    let headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = data.headline;

    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author'); //no text

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    let imgSrc = document.createElement('img');
    imgSrc.src = data.authorPhoto;

    let nameSpan = document.createElement('span');
    nameSpan.textContent = `By ${data.authorName}`;


    cardContainer.appendChild(cardDiv);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(imgSrc);
    authorDiv.appendChild(nameSpan);

}