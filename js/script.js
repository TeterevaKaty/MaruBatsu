var gameArea = document.getElementById('game_area');
let turn = 0;
var result ='';
var arrWin =  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7,],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

gameArea.addEventListener('click', e => {
    if(e.target.innerHTML != '×' && e.target.innerHTML != '○'){
        if(e.target.className = 'cell'){
         turn % 2 === 0 ? e.target.innerHTML  = '×' : e.target.innerHTML = '○';
         turn++;
            isWinner();
        }
    }
})

function isWinner(){
    var cells = document.getElementsByClassName('cell');
    for(let i = 0; i < arrWin.length; i++){
        if (cells[arrWin[i][0]].innerHTML == '×' && cells[arrWin[i][1]].innerHTML =='×' && cells[arrWin[i][2]].innerHTML =='×'){
            result = '×';
            alert(result + " are win!");
            
        } else if (cells[arrWin[i][0]].innerHTML == '○' && cells[arrWin[i][1]].innerHTML =='○' && cells[arrWin[i][2]].innerHTML =='○'){
            result = '○';
            alert(result + " are win!");
        }
    }
    
    
}