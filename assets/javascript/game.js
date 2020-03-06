crystals = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.jpeg','assets/images/green.jpg'];
var counter;
var wins;
var losses; 
var numbers;
var randomNumber;
var found;
var status;

//determining win and loss counter
$('#wins-tracker').text(wins);
$('#loss-tracker').text(losses);

function newCrystals() {
    numbers = [];
    while(numbers.length < 4){
        randomNumber = Math.floor(Math.random()*13)
        found = false;
        for (var i=0; i< numbers.length; i++){
            if (numbers[i] === randomNumber){
                found = true; break
            }
          }
          if(!found)numbers[numbers.length]=randomNumber;
        }
    for (i = 0; i < numbers.length; i++) {
        var imageCrystal = $('<img>');
        imageCrystal.attr('data-num', numbers[i]);
        imageCrystal.attr('src', crystals[i]);
        imageCrystal.attr('alt', 'crystals');
        imageCrystal.addClass('crystalImage')
        $('#crystals').append(imageCrystal);
    }
}

function newGame() {
    counter = 0;
    $('#score').text(counter);

    function randomIntFromInterval(min,max){
           return Math.floor(Math.random()*(max-min)+1);
        }

    var numberToGuess = randomIntFromInterval(19,120);

    $('#value').text(numberToGuess);


    $('.crystalImage').on('click', function() {
        counter = counter + parseInt($(this).data('num'));
        $('#score').text(counter);
        //determine user's win 
        if (counter == numberToGuess){
          $('#status').text('You won!');
          wins ++;
          $('#wins-tracker').text(wins);
          $('#crystals').empty();
          newCrystals();
          newGame();
        //determine user losses	        
        } else if ( counter > numberToGuess){
            $('#status').text('You lost!');
            losses ++;
            $('#loss-tracker').text(losses);
            $('#crystals').empty();
            newCrystals();
            newGame();
        }
    });
}

$(document).ready(function() {
    counter = 0;
    wins = 0;
    losses = 0;
    newCrystals();
    newGame();
});