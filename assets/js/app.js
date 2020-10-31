// all notes push to this array and always render this array
let notes = getNotesFromLS();

// get form
const form = document.querySelector("#form");

// get notelist section for print notes here
const noteList = document.querySelector("#note-list");

// get logo slider for shake after submission
const logoSlider = document.querySelector("#logo-image");

// all eventlisteners
form.addEventListener("submit", newNote);
noteList.addEventListener("click", removeNote);

// render notes after refresh page
renderNotes();
