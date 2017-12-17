
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// Your game will hide this amount until the player clicks a crystal.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. 
// The crystals will have four new hidden values that will reset to zero.
// The app should show the number of games the player wins and loses. Do not refresh the page as a means to restart the game.



// Create the Global variable to store the random numbers.
var targetNumber = Math.floor((Math.random() * 101) + 19);

$("#number-to-guess").text(targetNumber);

var numberOptions = Math.floor((Math.random() * 12) + 1);

var counter = 0;

var wins = 0;

var losses = 0;

$('#totalWins').text(wins);

$('#totalLosses').text(losses);


//Game reset
var reset = function() {
    targetNumber = Math.floor((Math.random() * 101) + 19);
    numberOptions = Math.floor((Math.random() * 12) + 1);
    $("#number-to-guess").text(targetNumber);
    // counter = 0;
    // wins = 0;
    // $('#totalWins').text(wins);
    // losses = 0;
    // $('#totalLosses').text(losses);
};

if (counter === targetNumber) {
    wins++;
    $('#alerted').text("You Won");
    $('#totalWins').text(wins);
    reset();
} else if (counter > targetNumber) {
    losses++;
    $('#alerted').text("You Lost");
    $('#totalLosses').text(losses);
    reset();
}


// Create multiple crystals with their own unique number value.
// We begin by expanding our array to include four options.  
// Next we create a for loop to create crystals for every numberOption.

for (var i = 0; i < 1; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal1 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal4 = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal1.addClass("crystal-image");
    imageCrystal3.addClass("crystal-image");
    imageCrystal2.addClass("crystal-image");
    imageCrystal4.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal1.attr("src", "assets/images/crystal1.png");
    imageCrystal3.attr("src", "assets/images/crystal3.png");
    imageCrystal2.attr("src", "assets/images/crystal2.png");
    imageCrystal4.attr("src", "assets/images/crystal4.png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal1.attr("data-crystalvalue", numberOptions);
    imageCrystal3.attr("data-crystalvalue", numberOptions);
    imageCrystal2.attr("data-crystalvalue", numberOptions);
    imageCrystal4.attr("data-crystalvalue", numberOptions);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal1);
    $("#crystals").append(imageCrystal3);
    $("#crystals").append(imageCrystal2);
    $("#crystals").append(imageCrystal4);
}

// click event applies to every single crystal on the page. Not just one.
// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter


$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    numberOptions = Math.floor((Math.random() * 12) + 1);

    counter += numberOptions;
    $("#score_num").text(counter);

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);

    if (counter === targetNumber) {
        $('#alerted').text("You win!");
        wins++;
        $('#totalWins').text(wins);

        reset();
    } else if (counter >= targetNumber) {
        $('#alerted').text("You lose!!");
        losses++;
        $('#totalLosses').text(losses);

        reset();
    }


});