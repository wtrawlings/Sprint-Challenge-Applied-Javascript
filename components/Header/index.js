// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const head = document.createElement('div');
    head.classList.add('header');

    const span = document.createElement('span');
    span.classList.add('date');
    span.textContent = 'MARCH 28, 2019';

    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';

    const span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = '98°';

    const headControl = document.querySelector('.header-container');
    headControl.appendChild(head);
    headControl.appendChild(span);
    headControl.appendChild(h1);
    headControl.appendChild(span2);

}
//console.log(Header);
Header();