// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicTab = document.querySelector('.topics');

let topicsHold = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const topicsHold = response.data;
        //console.log(topicsHold); //this is showing the data
        console.log(topicList(response.data))
            //return topicsHold;
    })
    .catch(error => {
        console.error(error)
    })

function topicList() {
    //const topicTab = document.querySelector('.topics');
    console.log(topicTab);
    //console.log(topicsHold); //this is still blank for some reason
    topicsHold.forEach(topicBunch());

    function topicBunch() {
        var topicDiv = document.createElement('div');
        topicTab.appendChild(topicDiv);
        topicDiv.classList.add('tab');
        topicDiv.textContent = topics[i];

        console.log(topicTab);

    }

}


//console.log(topicsHold); //this shows as undefined

//return topicList;//I need to return something!

//console.log(topicTab)//no data in topicTab
topicList();