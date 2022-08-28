function  reload(){

let yourPet
let enemyPet

// Aleatorio
function aleatorio (max,min){
    return(Math.floor(Math.random()*(max-min+1)+min))
}
//Mascotas
function selectPet(){
    //Mascota Jugador
    let bullbasaur = document.getElementById("bullbasaur")
    let charmander = document.getElementById("charmander")
    let squirtle = document.getElementById("squirtle")
    let petGamerName = document.getElementById("gamerPet")
    let petPcName =document.getElementById("pcPet")
   
    if(bullbasaur.checked){
  
        petGamerName.innerHTML="Bullbasaur"
        petGamerName.classList.add("badge")
        petGamerName.classList.add("text-bg-success")
        yourPet = "Bullbasaur"

        
    } else if (charmander.checked){

        petGamerName.innerHTML="Charmander"
        petGamerName.classList.add("badge")
        petGamerName.classList.add("text-bg-danger")
        yourPet = "Charmander"
    } else if (squirtle.checked){
   
        petGamerName.innerHTML="Squirtle"
        petGamerName.classList.add("badge")
        petGamerName.classList.add("text-bg-primary")
        yourPet = "Squirtle"
    } else{
        alert("Por favor, selecciona una mascota")
    }

    //Mascota de la PC

   
    let pcPick = aleatorio(3,1)
   
    if (pcPick == 1){
        petPcName.innerHTML="Bullbasaur"
        petPcName.classList.add("badge")
        petPcName.classList.add("text-bg-success")
        enemyPet ="Bullbasaur"
    }else if(pcPick==2){
        petPcName.innerHTML="Charmander"
        petPcName.classList.add("badge")
        petPcName.classList.add("text-bg-danger")
        enemyPet ="Charmander"

    }else{
        petPcName.innerHTML="Squirtle"
        petPcName.classList.add("badge")
        petPcName.classList.add("text-bg-primary")
        enemyPet ="Squirtle"


    }
}
let buttonPetSelect = document.getElementById("button-petSelect")
buttonPetSelect.addEventListener("click",selectPet)



//Ataques
let gamerAttack
let pcAttack

//Ataque de la PC
function pcAleatoryAttack(){
    n = aleatorio(3,1)
    if (n==1){
        pcAttack = "Fuego"
    }else if(n==2){
        pcAttack ="Agua"
    }else{
        pcAttack ="Planta"
    }
}
// Ataques del jugador
function message(){
    
let gamerMessage = document.getElementById("gamerAttack")
gamerMessage.innerHTML="Tu mascota "+ yourPet+" atacó con " + gamerAttack
let pcMessage = document.getElementById("pcAttack")
pcMessage.innerHTML="La mascota enemiga "+enemyPet+" atacó con " + pcAttack
}


function selecFireAttack(){
    gamerAttack="Fuego"
    pcAleatoryAttack()
    message()
    

    console.log("tu mascota "+ yourPet +" atacó con: "+" "+gamerAttack)
    console.log("la mascota enemiga "+enemyPet+" atacó con:  "+" "+pcAttack)
}
function selecWaterAttack(){
    gamerAttack="Agua"
    pcAleatoryAttack()
    message()

    console.log("tu mascota "+ yourPet +" atacó con "+gamerAttack)
    console.log("la mascota enemiga "+enemyPet+" atacó con "+pcAttack)
}
function selecPlantAttack(){
    gamerAttack="Planta"
    pcAleatoryAttack()
    message()

    console.log("tu mascota "+ yourPet +" atacó con "+gamerAttack)
    console.log("la mascota enemiga "+enemyPet+" atacó con "+pcAttack)
}

let buttonFire = document.getElementById("button-fire")
buttonFire.addEventListener("click",selecFireAttack)

let buttonWater = document.getElementById("button-water")
buttonWater.addEventListener("click",selecWaterAttack)

let buttonPlant = document.getElementById("button-plant")
buttonPlant.addEventListener("click",selecPlantAttack)




}
window.addEventListener("load", reload)