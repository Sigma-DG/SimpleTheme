function onLoginLoaded() {
    $(".login").corner("7px");
    $(".bg").fadeTo(2000, .4);
}
function onItemsLoaded(params) {
    $(".header").corner("bottom 7px");
    $(".formBody").corner("5px");
}

function toItems(){
    window.location.href = "index.html";
}
function toOptions(){
    window.location.href = "options.html";
}
function toLogin(){
    window.location.href = "../index.html";
}

function onSearch(){
    $("#results").slideDown(700);
}

function toMotor(){
    window.location.href = "item.html";
}