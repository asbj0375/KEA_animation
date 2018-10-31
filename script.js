window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden vises");
    // Nulstil alting
    // Note: how?

    // -> showStart
    showStart();

}

function showStart() {
    console.log("showStart");
    // Vis startskærm
    document.querySelector("#start").classList.add("show");
    // Start animation på start-knap
    document.querySelector("#play").classList.add("pulse");
    // Start animation på settings-knap
    document.querySelector("#settings_button").classList.add("spin");

    //Når der er klikket på start knap gå til hideStart

    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hideStart");
    // Stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");
    // Stop animation på settings-knap
    document.querySelector("#settings_button").classList.remove("spin");
    // Fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    // Når fade er færdig, gå til start game
    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    console.log("startGame");
    // Skjul startskærm
    document.querySelector("#start").classList.add("hide");
    // Vis spilskærm
}
