// 1 premenná, ktorá bude zisťovať, ktorý tile má mole
let currMoleTile;


//pri otváraní okna privoláme setGame
window.onload = function(){
    setGame();
}
// definujeme setgame
function setGame(){
    //nastavíme grid pre div board v HTML
    //i ide od nuly po osem
    for (let i = 0; i < 9; i++){
        //vytvárame div do ktorého vkladáme tily s id od 0 po osem <div id=0-8></div>
        //tu budeme zisťovať, na ktorý tile hráč klikol a ktorý tile obsahuje rastlinu a ktorý bobra
        let tile = document.createElement("div")
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
    //nastavujeme interval zobrazenia na každých 2000milisek
    setInterval(setMole, 2000);
}
// 4 do funkcie ideme dosadiť výpočet náhodnosti
function getRandomTile(){
    //vzorec pre náhodné číslo od 0 po 8 - zaokrúhľujeme totiž nadol
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

// 2 funkcia naviazaná na mole - tá to bude zisťovať
function setMole(){
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    // 3 náhodná funkcia
    let num = getRandomTile();
    // 5 vkladáme obrázok do funkcie, ktorá náhodne vyvolá mole
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}