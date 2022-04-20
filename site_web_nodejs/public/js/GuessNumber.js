window.onload = ()=> {
    alertify({
    title:"Bravo ! Tu as trouvé un secret caché !",
    text:"But du jeux :\nEssayez de deviner le nombre aléatoire, votre choix doit être un entier compris entre 0 et 100"
});

  //SELECTING EVRYTHING I NEED
  let msg = document.querySelector("#msg");
  let btn = document.querySelector("#btn");
  let msg2 = document.querySelector("#msg2");
  let correct = document.querySelector("#correct");
  let wrong = document.querySelector("#wrong");
  let not_int = document.querySelector("#not_int");
  let user_guess = document.querySelector("#user_guess");
  let empty = document.querySelector("#empty");
  let comps = document.querySelector("#comps");
  let user = document.querySelector("#user");

  //CREATING EVERYTHING I NEED
  let rand_comp_choice;
  let random;
  let check;

  //HIDING ERROR AND SUCCESS MESSAGES
  correct.style.visibility = "hidden";
  not_int.style.visibility = "hidden";
  wrong.style.visibility = "hidden";
  msg2.style.visibility = "hidden";
  msg.style.visibility = "hidden";
  empty.style.visibility = "hidden";

  //ONCLICK RUN
  btn.onclick = ()=> {
check_uguess = parseInt(user_guess.value);
    if (isNaN(check_uguess))     {
      not_int.style.visibility = "";
    } else {
      not_int.style.visibility = "hidden";

      if (user_guess.value != "") {
        empty.style.visibility = "hidden";
        random = Math.round((Math.random()*100));
comps.innerText = random;
        user.innerText = check_uguess;

        if (random == check_uguess) {
          correct.style.visibility = "";
          wrong.style.visibility = "hidden";
          user_guess.value = "";
        } else {
          correct.style.visibility = "hidden";
          wrong.style.visibility = '';
          user_guess.value = "";
        }
      } else {
        empty.style.visibility = "";
      }
    }
  };

  //KEY PRESS EVENT LISTENER
  window.addEventListener("keyup", ()=> {
    check_uguess = parseInt(user_guess.value);

    if (check_uguess > 100) {
      msg.style.visibility = "";
    } else {
      msg.style.visibility = "hidden";
    }
    if (check_uguess < 0) {
      msg2.style.visibility = "";

    } else {
      msg2.style.visibility = "hidden";
    }


  });


};
