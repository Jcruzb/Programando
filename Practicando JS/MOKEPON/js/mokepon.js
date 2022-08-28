function  reload(){



// Mascotas

function selectPet(){
    //Mascota Jugador
    let bullbasaur = document.getElementById("bullbasaur")
    let charmander = document.getElementById("charmander")
    let squirtle = document.getElementById("squirtle")
    let petGamerName = document.getElementById("gamerPet")
    let petPcName =document.getElementById("pcPet")
   
    if(bullbasaur.checked){
  
        petGamerName.innerHTML="Bullbasaur"
    } else if (charmander.checked){

        petGamerName.innerHTML="Charmander"
    } else if (squirtle.checked){
   
        petGamerName.innerHTML="Squirtle"
    } else{
        alert("Por favor, selecciona una mascota")
    }

    //Mascota de la PC

    function aleatorio (max,min){
        return(Math.floor(Math.random()*(max-min+1)+min))
    }
    let pcPick = aleatorio(3,1)
    console.log(pcPick)
    if (pcPick == 1){
        petPcName.innerHTML="Bullbasaur"
    }else if(pcPick==2){
        petPcName.innerHTML="Charmander"
    }else{
        petPcName.innerHTML="Squirtle"

    }
}
let buttonPetSelect = document.getElementById("button-petSelect")
buttonPetSelect.addEventListener("click",selectPet)



}
window.addEventListener("load", reload)