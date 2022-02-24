const players = document.getElementsByClassName('player');
for( const player of players){
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

function addPlayer(){
    const playersContainer= document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    console.log(player);
}