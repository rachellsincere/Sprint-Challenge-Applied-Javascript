// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

//axios.get('https://lambda-times-backend.herokuapp.com/articles')
    //.then(response => {

   // })

   class CardCreator {
    constructor(item) {
        const cardDiv = document.createElement('div');
        const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainerDiv = document.createElement('div');
        const img = document.createElement('img');
        const bySpan = document.createElement('span');

        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imgContainerDiv);
        imgContainerDiv.appendChild(img);
        authorDiv.appendChild(span);
                
        cardDiv.classList.add('card');
        headlineDiv.classList.add('headline');
        authorDiv.classList.add('author');
        imgContainerDiv.classList.add('img-container');

        headlineDiv.textContent = item.headline;
        img.src = item.authorPhoto;
        bySpan.textContent = `By ${item.authorName}`;
                        
        return cardDiv;
    }
}


const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

    console.log(response);

    const  responseData = response.data.articles;
    
    const dataArray = Object.keys(responseData).map(function(key) {
        return [responseData[key]];
    });

    dataArray.forEach(item => {
        item.forEach(item => {
            item.forEach(item => {

                const card = new CardCreator(item);
                cardsContainer.appendChild(card);
            })
        })
    }) 
})
.catch( error => {
    console.log("Error:", error);
});
