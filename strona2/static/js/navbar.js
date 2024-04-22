var res_button = document.querySelector('.res_button');
var close_button = document.querySelector('.close_button');
var dropdown = document.querySelector('.dropdown');




// res_button.addEventListener('click', function() {
//     // dropdown.style.dispaly = 'grid'
//     dropdown.setAttribute('fromleft', 'true')
//     dropdown.setAttribute('active', true);
//     setTimeout(() => {
//         dropdown.style.transform = 'translate(100%, 0%)'
//     }, 400);
//     res_button.style.display = 'none';
//     close_button.style.display = 'grid';
// });

// close_button.addEventListener('click', function() {
//     dropdown.style.transform = 'translate(200%, 0%)';
//     setTimeout(() => {
//         dropdown.setAttribute('active', false)
//         dropdown.setAttribute('fromleft', false)
//     }, 400);
//     setTimeout(() => {
//         dropdown.style.display = 'none'
//         dropdown.style.transform = 'translate(-100%, 0%)';
//         setTimeout(() => {
//             dropdown.style.display = 'grid';
//         }, 100);
//     }, 100);
    
//     res_button.style.display = 'grid';
//     close_button.style.display = 'none';
// });



// res_button.addEventListener('click', function() {
//     setTimeout(() => {
//         dropdown.setAttribute('type', 'in');
//     }, 200);
//     res_button.style.display = 'none';
//     close_button.style.display = 'grid';
// })


// close_button.addEventListener('click', function() {
//     setTimeout(() => {
//         dropdown.setAttribute('type', 'out');
//     }, 200);
//     res_button.style.display = 'grid';
//     close_button.style.display = 'none';

// })


var button = document.getElementById("button1");
var box = document.querySelector(".box");
box.addEventListener("click", function(){
    box.classList.toggle("open");
    var isActive = dropdown.getAttribute("type");
    if (isActive === "in") { // Poprawiamy warunek na sprawdzenie czy atrybut "type" ma wartość "in"
        setTimeout(() => {
            dropdown.setAttribute('type', 'out');

            setTimeout(() => {
                dropdown.setAttribute('active', 'off');
            }, 400);
        }, 200);

    } else {
        setTimeout(() => {
            dropdown.setAttribute('active', 'on');
            setTimeout(() => {
                dropdown.setAttribute('type', 'in');
            }, 400);
        }, 200);

    }
});