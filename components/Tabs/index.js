// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topicsHold = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        topicsHold = response.data;
        console.log(response.data);
        //return topicsHold;
    })
    .catch(error => {
        console.error(error)
    })

function topicList(topicsHold) {
    const topicTab = document.querySelector('.topics');
    for (let i = 0; i < topicsHold.length; i++) {
        document.createElement('div');
        topicTab.appendChild('div');
        topicTab.classList.add('tab');
        topicTab.textContent = topics[i];

        return topicTab;
    }
}
//console.log(topicTab)
topicList(topicsHold);
console.log(topicsHold);