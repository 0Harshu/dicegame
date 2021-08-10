const play1 = Math.floor(Math.random() *6) + 1; // we generete number 1 to 6

const play1DiceImage = 'images/dice' + play1 + '.png'; // we connect dice imges to number 

document.getElementById('lol').setAttribute('src', play1DiceImage);



//Playe2//

const play2 = Math.floor(Math.random() *6) + 1; 

const play2DiceImage = 'images/dice' + play2 + '.png';

document.getElementById('lo').setAttribute('src', play2DiceImage);


//if 

if (play1 > play2) {
    document.querySelector('h1').innerHTML = 'PLayer 1 Wine';

}

else if (play1 < play2) {
    document.querySelector('h1').innerHTML = 'PLayer 2 Wine';
}
else{
    document.querySelector('h1').innerHTML = 'Draw';
}
