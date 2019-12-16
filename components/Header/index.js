// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div');
    const articleDate = document.createElement('span');
    const articleTitle = document.createElement('h1');
    const temperature = document.createElement('span');

    //setup html structure
    headerDiv.appendChild(articleDate);
    headerDiv.appendChild(articleTitle);
    headerDiv.appendChild(temperature);

    //add css classes back in
    headerDiv.classList.add('header')
    articleDate.classList.add('date');
    temperature.classList.add('temp');

    //add text content
    articleDate.textContent = 'March, 28, 2019';
    articleTitle.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    return headerDiv;

}

document.querySelector('.header-container').appendChild(Header());
