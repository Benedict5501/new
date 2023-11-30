// var drink ='fanta'

// if(drink == 'sprite'){
//     Show.innerHTML = "fanta"
// } else {
//     show.innerHTML = "sha buy anything for me"
// }

// var food = "Amala"
// var drink = "Reaktor Dark Power"

// if (food == "Amala") {
//     if (drink == "Reaktor Dark Power") {
//         show.innerHTML = "Buy abula"
//     }
// } else if(food == "Eba" ) {
// show.innerHTML = "Buy ill/egusi"
// } else if(food == "Iyan") {
//     show.innerHTML = "Buy efo riro/egusi"
// } else {
//     show.innerHTML= "Buy me bread and beans with chilled fanta"
// }

function checkvalue() {
    if (num.value != "") {
        if (num.value >= 0 && num.value < 40) {
            console.log("F");
            display.innerHTML ="F"
        }else if (num.value >= 40 && num.value < 45) {
            console.log("E");
            display.innerHTML ="E "
        } if (num.value >= 70 && num.value < 100) {
            console.log("A");
            display.innerHTML ="A"
        }
    } else{
        alert("Please fill in the empty space")
    }
}


function Music() {
    var songtoplay = new Audio("Music/joe.mp3")
    songtoplay.play();
}