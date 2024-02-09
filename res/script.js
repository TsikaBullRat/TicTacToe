const wins = [
    "1,0,0,0,1,0,0,0,1",
    "1,1,1,0,0,0,0,0,0",
    "0,0,0,1,1,1,0,0,0",
    "0,0,0,0,0,0,1,1,1",
    "1,0,0,1,0,0,1,0,0",
    "0,1,0,0,1,0,0,1,0",
    "0,0,1,0,0,1,0,0,1",
    "0,0,1,0,1,0,1,0,0",
    "1,0,0,1,0,0,1,0,1",
    "1,0,0,0,0,0,1,1,1",
    "1,0,1,0,0,1,0,0,1",
    "1,1,1,0,0,0,0,0,1",
    "1,0,0,0,1,0,1,0,1",
    "0,0,0,0,1,0,1,1,1",
    "0,0,1,0,1,0,1,0,1",
    "0,0,1,0,1,1,0,0,1",
    "1,0,1,0,1,0,0,0,1",
    "1,0,1,0,1,0,1,0,0"
]
var nill = []
var player = 0, player1 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0], player2 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0]
let block = document.getElementsByClassName("block")

const Check = () =>{
    console.log(player1.toString())
    let winner = false, victor
    var draw = false
    for(let i = 0; i < wins.length; i++){
        if(player === 0){
            if(wins[i] === player1.toString()){
                winner = true
                victor = "Player 1"
            }
        }else{
            if(wins[i] === player2.toString()){
                winner = true
                victor = "Player 2"
            }
        }
    }

    let z = 0
    for(let x = 0; x < player1.length; x++){
        z += player1[x]
        if( z === 5) draw = true
    }

    if(winner){
        $("#message").text(`Player ${victor} wins`)
        $(".overlay").show()
    }else if(draw){
        $("#message").text("It's a draw")
        $(".overlay").show()
    }

}

const Select = (index) =>{

    // for(let i = 0; i < nill.length; i++){
    //     if(index = nill[i])
    // }
    nill = [...nill, index]

    if(player === 0){
        player1[index] = 1
        block[index].innerHTML = "<img src='./src/close.png' alt='X'>" 
        Check()
        player = 1
    }else{
        player2[index] = 1
        block[index].innerHTML = "<img src='./src/circle-ring.png' alt='O'>" 
        Check()
        player = 0
    }
}

$("#new").click(function(){
    for(let i = 0; i < block.length; i++){
        block[i].innerHTML = ""
    }

    for(let i = 0; i < player1.length; i++){
        player1[i] = 0
        player2[i] = 0
    }

    player = 0
    $(".overlay").hide()
})