window.addEventListener("load", sidenVises);



let showSettingsEffektSound = true;
let showSettingsMusic = true;
let timeLeft = 30;

function sidenVises() {
    console.log("Siden vises");
    // Nulstil alting
    // Note: how?
    document.querySelector("#settings").addEventListener("click", showSettings);
    document.querySelector("#setting_close").addEventListener("click", showSettings);

    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);



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
    document.querySelector("#settings").classList.add("spin");
    // Start animation på frikadelle og grøntsager
    document.querySelector("#frikadelle_ben").classList.add("wiggle");
    document.querySelector("#broccoli_bat").classList.add("bat");
    document.querySelector("#gulerod_smoke").classList.add("smoke");

    //Når der er klikket på start knap gå til hideStart
    document.querySelector("#play").addEventListener("click", hideStart);


}

function hideStart() {
    console.log("hideStart");
    // Stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");
    // Stop animation på settings-knap
    //    document.querySelector("#settings").classList.remove("spin");
    // Fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    // Når fade er færdig, gå til start game
    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    console.log("startGame");
    // Skjul startskærm

    erSpilletStoppet = false;

    document.querySelector("#frikadelle").addEventListener("click", clickDunse);
    document.querySelector("#frikadelle1").addEventListener("click", clickDunse);
    document.querySelector("#frikadelle2").addEventListener("click", clickDunse);
    document.querySelector("#broccoli").addEventListener("click", clickBroccoli);
    document.querySelector("#broccoli1").addEventListener("click", clickBroccoli);
    document.querySelector("#broccoli2").addEventListener("click", clickBroccoli);
    document.querySelector("#broccoli3").addEventListener("click", clickBroccoli);
    document.querySelector("#gulerod").addEventListener("click", clickGulerod);
    document.querySelector("#gulerod1").addEventListener("click", clickGulerod);
    document.querySelector("#gulerod2").addEventListener("click", clickGulerod);
    document.querySelector("#musik").play();
    document.querySelector("#musik").volume = 0.1;

    //    if (this.classList.contains("knap")) {
    //        document.querySelector("#knap").play();

    tidenGaar();
}


let point = 0;
let liv = 3;

function clickDunse() {
    console.log("click dunse");
    point++;
    console.log(point);
    document.querySelector(".antal").textContent = point;

    if (this.classList.contains("frikadelle")) {
        document.querySelector("#frikadelle_lyd").play();
        document.querySelector("#frikadelle_lyd").currentTime = 0;
    }


    document.querySelector("#glad").classList.remove("hide");
    document.querySelector("#ked").classList.add("hide");

    console.log(this);
    this.classList.add("hide");



    gameStatus();

}


function clickBroccoli() {
    console.log("click broccoli");

    console.log(liv);
    let heart = "#heart" + liv;
    document.querySelector(heart).classList.add("hide");
    liv--;
    if (this.classList.contains("broccoli")) {
        document.querySelector("#broccoli_lyd").play();
        document.querySelector("#broccoli_lyd").currentTime = 0;
    }

    document.querySelector("#ked").classList.remove("hide");
    document.querySelector("#glad").classList.add("hide");

    console.log(this);
    this.classList.add("hide");

    gameStatus();
}



function clickGulerod() {
    console.log("click gulerod");
    point--;
    console.log(point);
    document.querySelector(".antal").textContent = point;

    if (this.classList.contains("gulerod")) {
        document.querySelector("#gulerod_lyd").play();
        document.querySelector("#gulerod_lyd").currentTime = 0;
    }

    document.querySelector("#ked").classList.remove("hide");
    document.querySelector("#glad").classList.add("hide");

    console.log(this);
    this.classList.add("hide");

    gameStatus();
}

//function clickKnap() {
//    console.log("clickKnap");
//
//    if (this.classList.contains("knap")) {
//        document.querySelector("#knap_lyd").play();
//        document.querySelector("#knap_lyd").currentTime = 0;
//    }



function gameStatus() {
    if (liv <= 0) {
        gameOver();

        document.querySelector("#game_background").classList.add("blur");
        document.querySelector("#gameover").classList.add("show");

    }

    if (point > 2) {
        levelCompleted();

    }

}

function gameOver() {
    console.log("gameOver");
    //    erSpilletStoppet = true;
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#game_background").classList.add("blur");
    document.querySelector("#musik").muted = true;
    document.querySelector("#taber").play();

    //    document.querySelector("#glad").classList.add("hide");
    //    document.querySelector("#ked").classList.add("show");

    erSpilletStoppet = true;

    document.querySelector("#try_again_loser").classList.add("pulse");
    document.querySelector("#try_again_loser").addEventListener("click", reset);



}

function levelCompleted() {
    console.log("levelcomplete");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#game_background").classList.add("blur");
    document.querySelector("#musik").muted = true;
    document.querySelector("#vinder").play();

    erSpilletStoppet = true;

    document.querySelector("#try_again_winner").classList.add("pulse");
    document.querySelector("#try_again_winner").addEventListener("click", reset);



}

function reset() {
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    //    point = 0;
    //    liv = 3;
    //    timeLeft = 30;
    //    document.querySelector(".antal").textContent = point;
    //    document.querySelector("#tid").textContent = timeLeft;
    //    document.querySelector("#heart1").classList.remove("hide");
    //    document.querySelector("#heart2").classList.remove("hide");
    //    document.querySelector("#heart3").classList.remove("hide");
    //    document.querySelector("#game_background").classList.remove("blur");
    //
    //
    //
    //    startGame();

    location.reload();
}

function showSettings() {
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#setting_close").addEventListener("click", hideSettings);


}

function hideSettings() {
    document.querySelector("#settings_screen").classList.add("hide");

}

function toggleSounds() {
    console.log("toggleSounds");
    //    showSettingsEffektSound = !showSettingsEffektSound;

    if (showSettingsEffektSound == false) {
        //her klikker vi lyden på
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsEffektSound = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff);
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");
    //    her slukkes for sfx
    document.querySelector("#frikadelle_lyd").muted = true;
    document.querySelector("#broccoli_lyd").muted = true;
    document.querySelector("#gulerod_lyd").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#frikadelle_lyd").muted = false;
    document.querySelector("#broccoli_lyd").muted = false;
    document.querySelector("#gulerod_lyd").muted = false;
}

function toggleMusic() {
    console.log(("showSettingsMusic function ") + showSettingsMusic); //showSettingsMusic = !showSettingsMusic;


    if (showSettingsMusic == false) {
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.remove("on_off");
        document.querySelector("#music_sprite").offsetHeight;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);

    } else {
        //her kikker vi lyden af - slukker den
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.remove("off_on");
        document.querySelector("#music_sprite").offsetHeight;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
        //        musicOn();
    }
}



function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    //    document.querySelector("#music_sprite").classList.remove("on_off");
    //    document.querySelector("#music_sprite").classList.add("off_on");

    //  document.getElementById("music").className = "off";
    document.querySelector("#musik").muted = true;
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    //    document.querySelector("#music_sprite").classList.remove("off_on");
    //    document.querySelector("#music_sprite").classList.add("on_off");
    // document.getElementById("music").className = "on";
    document.querySelector("#musik").muted = false;
}

function tidenGaar() {
    console.log("funktion tidenGaar");

    timeLeft--;
    console.log(timeLeft);

    if (timeLeft > 0) {

        setTimeout(tidenGaar, 1000);
    } else {
        endGame();
    }

    document.querySelector("#tid").textContent = timeLeft;
}
let erSpilletStoppet = false;

function endGame() {
    console.log("endGame");
    if (erSpilletStoppet == true) {} else {
        if (point > 2) {
            levelCompleted();
        } else {
            gameOver();
        }
    }
}
