/**
 * Created by n-kat on 10/18/2016.
 */
var randomShit=[
    "You find another skull",
    "A text file is discovered",
    "A hint is revealed within some static",
    "A glance at the sky reveals nothing"
];
var timeWasted=0;

$( document ).ready(function() {
    var blizzcon = new Date(2016,10,4);
    var today = new Date();
    timeToBlizzcon = Math.round(Math.abs((blizzcon.getTime() - today.getTime())/(24*60*60*1000)));
    $('.release').text(timeToBlizzcon);
    $('.amic').click(function() {
        setOutput('The timer slowly ticks up. You feel underwhelmed');
        updateTimeWasted()
    });
    $('.nothing').click(function(){
        setOutput('Nothing is accomplished');
        updateTimeWasted()
    });
    $('.solve').click(function(){
        i=(Math.floor((Math.random() * randomShit.length)));
        setOutput(randomShit[i]);
        updateTimeWasted()
    });
    $('.better').click(function(){
        setOutput('The only way to truly win');
    });
});

function setOutput(text){
    $('.output').text(text);
}

function updateTimeWasted(){
    timeWasted+=1;
    $('.wasted').text(timeWasted);
}
