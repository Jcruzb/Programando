function reload() {
  let yourPet;
  let enemyPet;
  let gamerAttack;
  let pcAttack;
  let battleResult;
  let gamerLife;
  let pcLife;

  // Aleatorio
  function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //Mascotas
  function selectPet() {
    //Mascota Jugador
    let bullbasaur = document.getElementById("bullbasaur");
    let charmander = document.getElementById("charmander");
    let squirtle = document.getElementById("squirtle");
    let petGamerName = document.getElementById("gamerPet");
    let petPcName = document.getElementById("pcPet");

    if (bullbasaur.checked) {
      petGamerName.innerHTML = "Bullbasaur";
      petGamerName.classList.add("badge");
      petGamerName.classList.add("text-bg-success");
      yourPet = "Bullbasaur";
    } else if (charmander.checked) {
      petGamerName.innerHTML = "Charmander";
      petGamerName.classList.add("badge");
      petGamerName.classList.add("text-bg-danger");
      yourPet = "Charmander";
    } else if (squirtle.checked) {
      petGamerName.innerHTML = "Squirtle";
      petGamerName.classList.add("badge");
      petGamerName.classList.add("text-bg-primary");
      yourPet = "Squirtle";
    } else {
      alert("Por favor, selecciona una mascota");
    }

    //Mascota de la PC

    let pcPick = aleatorio(3, 1);

    if (pcPick == 1) {
      petPcName.innerHTML = "Bullbasaur";
      petPcName.classList.add("badge");
      petPcName.classList.add("text-bg-success");
      enemyPet = "Bullbasaur";
    } else if (pcPick == 2) {
      petPcName.innerHTML = "Charmander";
      petPcName.classList.add("badge");
      petPcName.classList.add("text-bg-danger");
      enemyPet = "Charmander";
    } else {
      petPcName.innerHTML = "Squirtle";
      petPcName.classList.add("badge");
      petPcName.classList.add("text-bg-primary");
      enemyPet = "Squirtle";
    }
  }
  let buttonPetSelect = document.getElementById("button-petSelect");
  buttonPetSelect.addEventListener("click", selectPet);

  //Ataques



 //Batalla
 function battle(){
    


    if (gamerAttack == pcAttack){
        battleResult = "Empate😶"
    } else if(gamerAttack=="Fuego" && pcAttack == "Planta"){
        battleResult = "¡Ganaste! 🍻"
    } else if(gamerAttack=="Agua" && pcAttack == "Fuego"){
        battleResult = "¡Ganaste! 🍻"
    }else if(gamerAttack=="Planta" && pcAttack == "Agua"){
        battleResult = "¡Ganaste! 🍻"
    }else{
        battleResult = "¡Perdiste! 😣"
    }
  }

  //Ataque de la PC
  function pcAleatoryAttack() {
    n = aleatorio(3, 1);
    if (n == 1) {
      pcAttack = "Fuego";
    } else if (n == 2) {
      pcAttack = "Agua";
    } else {
      pcAttack = "Planta";
    }
    battle()
    message();
    battleHistory()
    
  }
  // Ataques del jugador


  function selecFireAttack() {
    gamerAttack = "Fuego";
    pcAleatoryAttack();
  }
  function selecWaterAttack() {
    gamerAttack = "Agua";
    pcAleatoryAttack();
  }
  function selecPlantAttack() {
    gamerAttack = "Planta";
    pcAleatoryAttack();
  }

  let buttonFire = document.getElementById("button-fire");
  buttonFire.addEventListener("click", selecFireAttack);

  let buttonWater = document.getElementById("button-water");
  buttonWater.addEventListener("click", selecWaterAttack);

  let buttonPlant = document.getElementById("button-plant");
  buttonPlant.addEventListener("click", selecPlantAttack);

 
  function message() {
    let gamerMessage = document.getElementById("gamerAttack");
    gamerMessage.innerHTML =
      "Tu mascota " + yourPet + " atacó con " + gamerAttack;
    let pcMessage = document.getElementById("pcAttack");
    pcMessage.innerHTML =
      "La mascota enemiga " + enemyPet + " atacó con " + pcAttack + ", "+ battleResult;

  }
  function battleHistory(){
    let messageSection = document.getElementById("mensajes")
    
    let historyGamer = document.createElement("p")
    historyGamer.innerHTML ="Tu mascota " + yourPet + " atacó con " + gamerAttack;
    messageSection.appendChild(historyGamer)

    let historyPC = document.createElement("p")
    historyPC.innerHTML ="La mascota enemiga " + enemyPet + " atacó con " + pcAttack + ", "+ battleResult;

    messageSection.appendChild(historyGamer)
    messageSection.appendChild(historyPC)
   
  }
 





}
window.addEventListener("load", reload);
