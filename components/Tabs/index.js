// Step 2: Create Tabs
// -----------------------
//// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
//// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicTab = document.querySelector('.topics');
console.log(topicTab);


function topicsList(topics) {
    var topicDiv = document.createElement('div');
    topicTab.appendChild(topicDiv);
    topicDiv.classList.add('tab');
    topicDiv.textContent = topics;

};




axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        //console.log(response.data); //this is showing an Object with Topics array
        let topicsHold = response.data;
        //topicsList(topicsHold.topics); //this kinda worked but not fully
        topicsHold.topics.forEach(topicsList);
    })
    .catch(error => {
        console.error(error)
    });