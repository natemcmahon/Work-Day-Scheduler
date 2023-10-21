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

$(function () {
  
  saveButton.on('click', function (event) {
    var clickedButton = event.currentTarget;
    var buttonParent = clickedButton.parentElement;
    
    var hourText = buttonParent.children[1].value;

    localStorage.setItem(buttonParent.id + " Description", JSON.stringify(hourText));
  });
  
  // Determine current hour, log it to console
  var currentHour = parseInt(dayjs().format('HH'));

  // apply styling via classes dynamically
  for (var i = 0; i < elementIds.length; i++) {
    var ticker = 9 + i;
    var storageString = `hour-` + ticker;

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

    if (i === 0) {
      hourDescriptions[0].innerHTML = JSON.parse(localStorage.getItem("hour-09 Description"));
    }
    else {
      elementIds[i].children[1].value = JSON.parse(localStorage.getItem(storageString + " Description"));
    }
  
  }

  // Display the current date in the header of the page.
  var currentDate = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(currentDate);

  return;
});


