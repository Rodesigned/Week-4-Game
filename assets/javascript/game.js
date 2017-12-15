// There will be four crystals displayed as buttons on the page.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// Your game will hide this amount until the player clicks a crystal.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values that will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// Start with the document ready function so the code will load at the beginning of the game.
// The player will be shown a random number at the start of the game.
$(document).ready(function () {
			var ranNum = Math.floor((Math.random() * 101) + 19);
			//console.log(ranNum);
			$('#ran_num').text(ranNum);


			// Click on the crystals to create random numbers to add for a total score.
			// But first create the Global variable to store the random numbers.

			var numsCreated = [];
			var total = 0;
			var wins = 0;
			var losses = 0;

			//Now create the random numbers that will pass through each crystal.
			var numsPerCrystal=function(){
				for (var i = 0; i < 4; i++) {
					var nums = Math.floor((Math.random() * 11) + 1);
					numsCreated.push(nums);
				}
				//console.log(numsCreated);
			};
			numsPerCrystal();
			

			//Each crystal click will generate a random number for the total

			$('#crystal_one').on('click', function () {
				total = total + numsCreated[0];
				console.log("New total= " + total);
				$('#score_num').text(total);

				//If statement for winning and losing for each crystal
				if (total === ranNum) {
					wins();
				} else if (total > ranNum) {
					losses();
				}
			});
			$('#crystal_two').on('click', function () {
				total = total + numsCreated[1];
				console.log("New total= " + total);
				$('#score_num').text(total);

				if (total === ranNum) {
					wins();
				} else if (total > ranNum) {
					losses();
				}
			});

			$('#crystal_three').on('click', function () {
				total = total + numsCreated[2];
				console.log("New total= " + total);
				$('#score_num').text(total);

				//sets win/lose conditions
				if (total === ranNum) {
					wins();
				} else if (total > ranNum) {
					losses();
				}
			});

			$('#crystal_four').on('click', function () {
				total = total + numsCreated[3];
				console.log("New total= " + total);
				$('#score_num').text(total);


				if (total === ranNum) {
					wins();
				} else if (total > ranNum) {
					losses();
				}
			});

});

