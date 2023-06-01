// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

 

$(function () {

  var notes = {}

var currentDay = $("#currentDay")//variable to store the value of the current day
var date = new Date()//date getting
var todaysDate = date.toLocaleDateString();
// console.log(todaysDate)


function fetchFromLocalStorage() {
  var theStore = localStorage.getItem("notes")

  if (theStore) {
    notes = JSON.parse(theStore);
  }
  
}

currentDay.textContent = todaysDate;//updating the textcontent of the variable durrentDay


var currentHour = new Date().getHours();
var timeBlocks = $(".time-block");
// console.log(timeBlocks)

fetchFromLocalStorage();
for (let i = 0; i < timeBlocks.length; i++) {
  var timeBlock = timeBlocks[i];
  // console.log(timeBlock)
  var id = timeBlock.id
  console.log(notes[id])
  var currentTimeBlock = parseInt(id.split("-")[1]);
  
  if (currentTimeBlock < currentHour) {
    // timeBlock.classList.add("past");
    $(timeBlock).addClass("past")
    timeBlock.classList.remove("present");
    timeBlock.classList.remove("future");
  } else if (currentTimeBlock === currentHour) {
    timeBlock.classList.remove("past");
    timeBlock.classList.add("present");
    timeBlock.classList.add("future");
  } else {
    timeBlock.classList.remove("past");
    timeBlock.classList.remove("present");
    timeBlock.classList.add("future")
  }
}

$(".saveBtn").on("click", function(event) {

  var timeBlock = $(event.target).parent().attr("id");

  var userInput = $(event.target).siblings()[1].value;
  console.log(userInput);
  notes[timeBlock] = userInput;
  localStorage.setItem("notes", JSON.stringify(notes))


})




//in for loop try and target the textarea with jquery.children $(timeblock).children
















});





