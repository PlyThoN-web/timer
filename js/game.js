const numDivs = 36;
const maxHits = 10;

let hits = 0;
let number = 0

$(".container").addClass('invisible')

let firstHitTime = $("#button-start").click(
    function() {
      firstHitTime = new Date();
      return firstHitTime.getTime()
  });

function round() {
  let divSelector = randomDivId();
  $(divSelector).addClass("target").html(number = number + 1)

  if (hits === maxHits) {
      endGame();
    }

}

function endGame() {
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass('d-none');
  $(".container").css('display', 'none')
  $("#button-start").css('display', 'none')
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1
    $(event.target).text('')
    $(event.target).removeClass("target")
    round()
  }
}

function init() {
  $(".game-field").click(handleClick)

  $("#button-start").click(
    function() {
      round()
  });

  $("#button-reload").click(
    function() {
      location.reload();
  });
}
$("#button-start").click(
    function() {
    $(".container").removeClass('invisible')
  });


$(document).ready(init);


