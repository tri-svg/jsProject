import Sorter from './Sorter.js';

document.addEventListener("DOMContentLoaded", function () {
    //let sortButton = document.getElementById('sortButton');
    //let shuffleButton = document.getElementById('shuffleButton');

    let sorter = new Sorter(15);
    console.log(sorter);

    shuffleButton.addEventListener("click", function () { sorter.shuffle() });

    sortButton.addEventListener("click",function(){sorter.sort()});

})