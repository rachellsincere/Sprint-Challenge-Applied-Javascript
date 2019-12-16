// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsDiv = document.querySelector('.topics'); //selected tabs div to use later

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        // Remember response is an object
        console.log(response);
        const data = response.data.topics;
        data.forEach((topic) => { //iterate through array list received to return component
            topicsDiv.appendChild(newTab(topic));
        });

    })
    .catch( error => {
        console.log("Error:", error);
    })



function newTab(item) {
        const tabDiv = document.createElement('div'); //html structure
        tabDiv.classList.add('tab'); //added classes in
        tabDiv.textContent = item; //set text inside of div
        
        return tabDiv;

}


