var blockNine = document.getElementById('hour-09');
// var blockNine = $('#hour-09');
var blockTen = document.getElementById('hour-10');
var blockEleven = document.getElementById('hour-11');
var blockTwelve = document.getElementById('hour-12');
var blockOne = document.getElementById('hour-13');
var blockTwo = document.getElementById('hour-14');
var blockThree = document.getElementById('hour-15');
var blockFour = document.getElementById('hour-16');
var blockFive = document.getElementById('hour-17');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
////////////////////////////////////////////////////////////////////////////////////////////
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Determine current hour, log it to console
  var currentHour = parseInt(dayjs().format('HH'));
  console.log("current hour is: " + currentHour);
 

  // Pull hour segment from Schedule Blocks, convert to num, print to console
  var lastTwoChars = parseInt(blockNine.id.slice(-2));
  // var parseIntLastTwo = parseInt(lastTwoChars);
  console.log(lastTwoChars);

  // Comparison between lastTwoChars and currentHour, log result to console
  if (currentHour > lastTwoChars) {
    console.log("Time's up!");
    blockNine.setAttribute('class','row time-block past');
  }
  else if (currentHour === lastTwoChars) {
    console.log("get to work!");
    blockNine.setAttribute('class','row time-block present');
  }
  else {
    console.log("There's still time!");
    blockNine.setAttribute('class','row time-block future');
  }

/////////////////////////////////////////////////////////////////////////////////////////////  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('MMM D, YYYY');
$('#currentDay').text(currentDate);
})


