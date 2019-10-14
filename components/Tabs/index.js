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
    //const topicTab = document.querySelector('.topics');
    var topicDiv = document.createElement('div');
    topicTab.appendChild(topicDiv);
    topicDiv.classList.add('tab');
    topicDiv.textContent = topics;

    console.log(topicTab);
    console.log(topicDiv);
    console.log(topics); //why isn't this showing up!!!

};




axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data); //this is showing an ARRAY of topics
        topicsList(response.data);
    })
    .catch(error => {
        console.error(error)
    });



//console.log(topicsHold); //this shows as undefined

//return topicList;//I need to return something!

//console.log(topicTab)//no data in topicTab