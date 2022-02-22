// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
let start = Date.now(); // remember start time

let timer = setInterval(function () {
    console.log('here 2')
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 5000) {
        clearInterval(timer); // finish the animation after 5 seconds
        return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);

}, 20);


function draw(timePassed) {
    
    document.getElementById("myAnimation").style.width = timePassed / 5 + '%';
    console.log(document.getElementById("myAnimation").style.width)
    document.getElementById("myAnimation").style.height = timePassed / 5 + '%';
}