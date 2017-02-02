$(document).ready(function(){
  var saySomething = prompt("Do you have anything to say?");

  var first = saySomething.charAt(0);
  var last = saySomething.charAt(saySomething.length-1);

  var firstCapitalized = first.toUpperCase();
  var lastCapitalized = last.toUpperCase();

  var firstResponse = (firstCapitalized + lastCapitalized);
  var lastResponse = (lastCapitalized + firstCapitalized);

  var charLength = saySomething.length;

  var newBeginning = charLength / 2;

  var newsentence = (saySomething.charAt(newBeginning) + saySomething + firstResponse);

  $(".image1").click(function () {
    alert(saySomething);
  });

  $(".image2").click(function () {
    alert(newsentence);
  });

});
