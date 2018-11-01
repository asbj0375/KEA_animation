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
    document.querySelector("#start").classList.remove("hide");
    // Start animation på start-knap
    document.querySelector("#play").classList.add("pulse");
    // Start animation på settings-knap
    document.querySelector("#settings_button").classList.add("spin");
    // Start animation på frikadelle og grøntsager
    document.querySelector("#frikadelle_ben").classList.add("wiggle");
    document.querySelector("#broccoli_bat").classList.add("bat");
    document.querySelector("#gulerod_smoke").classList.add("smoke");

}

//Når der er klikket på start knap gå til hideStart

document.querySelector("#play").addEventListener("click", hideStart);



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

    document.querySelector("#frikadelle").addEventListener("click", clickDunse);
    document.querySelector("#broccoli").addEventListener("click", clickBroccoli);
    document.querySelector("#gulerod").addEventListener("click", clickGulerod);
}


let point = 0;
let liv = 3;

function clickDunse() {
    console.log("click dunse");
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;
}


function clickBroccoli() {
    console.log("click broccoli");
    liv--;
    console.log(liv);
    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("fade_out");
}



function clickGulerod() {
    console.log("click gulerod");
    point--;
    console.log(point);
    document.querySelector(".antal").textContent = point;
}




//let point = 0;
//
//
//function clickDunse() {
//    console.log("click dunse");
//
//    // TODO: giv point!
//
//    point++;
//    console.log(point);
//
//    document.querySelector(".antal").textContent = point;
//
//    // også TODO: Få det til at virke så mønten starter forfra - det må vente
//}
//
//
//function clickGulerod() {
//    console.log("click gulerod");
//}
//
//let liv = 3;
//
//function clickBroccoli() {
//    console.log("click broccoli");
//
//    // TODO: mist et liv
//    let heart = "#heart3";
//    document.querySelector(heart).classList.add("dissappear");
//    console.log("#heart" + liv);
//    liv--;
//    console.log(liv);
//
//
//    // også TODO: Få eksplosionen til at virke igen - det må også vente
//}
