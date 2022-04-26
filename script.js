import Lottery from "./modules/lottary.js";
import { politicians, folk } from "./data/data.js";

const buttonStartLottery = document.querySelector(".button-start-lottery");
const lottteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winningMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

const lottary = new Lottery(politicians);

buttonStartLottery.addEventListener("click", () => {
  buttonStartLottery.disabled = true;
  buttonStartLottery.innerHTML = "Lottery drawing in progres . . . ";

  lottteryResultsEl.style.display = "none";

  lottary
    .startDrawing()
    .then((result) => {
      winnersEl.display = "block";
      winningCombinationEl.innerHTML = `winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerHTML = "Winners";

      let winnersList = "";
      result.winners.forEach(
        (Player) => (winnersList += `<li> ${player.getPlayerDetails()} </li>`)
      );

      winnersEl.innerHTML = winnersList;
    })

    .catch((result) => {
      winnersEl.display = "none";
      winningCombinationEl.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerHTML = "There are no winners!";
    })

    .finally(() => {
      buttonStartLottery.innerHTML = "Start lottery drawing";
      buttonStartLottery.disabled = false;
      lottteryResultsEl.style.display = "block";
    });
});
