var elementIds = [];
elementIds.push($('#hour-09')[0]);
for (var i = 0; i < 8; i++) {
  var ticker = 10 + i;
  var queryString = `#hour-` + ticker;
  var result = $(queryString);
  elementIds.push(result[0]);
}


var saveButton = $('.saveBtn');
var hourDescriptions = $('.description');
// console.log(hourDescriptions);

// hourDescriptions.each(placeholder);


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
  saveButton.on('click', function (event) {
    var clickedButton = event.currentTarget;
    var buttonParent = clickedButton.parentElement;
    // console.log(buttonParent.id);
    var hourText = buttonParent.children[1].value;
    // console.log(hourText);

    // hourDescriptions[0].innerHTML = hourDescriptions[0].value;
    // var text = hourDescriptions[0].innerHTML;
    // localStorage.setItem("blockNineDescription", JSON.stringify(text));
    localStorage.setItem(buttonParent.id + " Description", JSON.stringify(hourText));
  });
  //
////////////////////////////////////////////////////////////////////////////////////////////
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Determine current hour, log it to console
  var currentHour = parseInt(dayjs().format('HH'));


  // console.log(block09);
 
  /////////// WORKING SPACE //////////////////////////
  // Trying to loop through HTML elements using JQuery selectors and apply
  // styling via classes dynamically


for (var i = 0; i < elementIds.length; i++) {

  var selectedHour = parseInt(elementIds[i].id.slice(-2));


  if (currentHour > selectedHour) {
      elementIds[i].setAttribute('class','row time-block past');
      
  }
  else if (currentHour === selectedHour) {
      elementIds[i].setAttribute('class','row time-block present');
  }
  else {
      elementIds[i].setAttribute('class','row time-block future');
  }
}
  //////////////////////// WORKING SPACE ////////////////////////////////////

  // Comparison between lastTwoChars and currentHour, log result to console

/////////////////////////////////////////////////////////////////////////////////////////////  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  hourDescriptions[0].innerHTML = JSON.parse(localStorage.getItem("blockNineDescription"));

  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(currentDate);

  return;
});


