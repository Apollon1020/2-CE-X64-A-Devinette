document.addEventListener("DOMContentLoaded", () => {
    const min = 1;
    const max = 100;
    const nombreMystere = Math.floor(Math.random() * (max - min + 1)) + min;
    let tentative = 0;

    const feedback = document.getElementById("feedback");
    const guessInput = document.getElementById("guess");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", () => {
        const guess = parseInt(guessInput.value, 10);
        tentative++;

        if (isNaN(guess)) {
            feedback.textContent = "Veuillez entrer un nombre valide.";
            feedback.style.color = "red";
        } else if (guess < nombreMystere) {
            feedback.textContent = "C'est plus !";
            feedback.style.color = "yellow";
        } else if (guess > nombreMystere) {
            feedback.textContent = "C'est moins !";
            feedback.style.color = "yellow";
        } else {
            feedback.textContent = `Félicitations ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentative(s).`;
            feedback.style.color = "lightgreen";
            submitButton.disabled = true;
            guessInput.disabled = true;
        }

        guessInput.value = "";
        guessInput.focus();
    });
});
