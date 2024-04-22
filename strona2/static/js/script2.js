
var button = document.querySelector("#button");
var id = document.querySelector("#id").value;

button.addEventListener("click", function() {
    var kalendarz = document.getElementById("date").value;
    var id = document.querySelector("#id").value;
    console.log(kalendarz);
    console.log(id);
    window.location.href = `/api/add/${id}?${kalendarz}`
    // console.log('niger');
    // window.location.href = "http://stackoverflow.com";
});

