
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

{while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6:");
	if (guess < 0 || guess > 6) {
		alert("Пожалуйста, введите число в диапазоне от 0 до 6");
	} else {
			guesses = guesses + 1;

			if (guess == location1 || guess == location2 || guess == location3) {
				alert("ПОПАЛ!")
				hits = hits +1;
                
			  if (hits == 3) {
				isSunk = true;
				alert("Поздравляю!!! Ты потопил(а) мой корабль!!!");
			  }	
			} else {
				alert("Промах!")
			}
		}
	}
	var stats = "Вы использовали " + guesses + " попытки/попыток потопить корабль, " +
	              "что означает, что Ваша точность стрельбы была " + (3/guesses);
	alert(stats);
}
console.log

