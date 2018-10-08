var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = getRandomLetter();

function getRandomLetter () {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function keyFunction(event) {
    var x = event;
    return x;
}
console.log(randomLetter);
document.onkeypress = function (event) {
    alert(event.key)
};

window.addEventListener("keydown", event => {
    if (event.key == randomLetter) {
        document.body.style.background = "violet";
    }
});
/*for (var i = 0; i < letters.length; i++) {
    
};*/