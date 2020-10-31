// get notes from local storage
function getNotesFromLS() {
  // get all notes from local storage
  const notesJSON = localStorage.getItem("notes");

  // condition for empty or parse notes for push to notes array
  return notesJSON !== null ? JSON.parse(notesJSON) : [];
}
// get notes from local storage
function getNotesFromLS() {
  // get all notes from local storage
  const notesJSON = localStorage.getItem("notes");

  // condition for empty or parse notes for push to notes array
  return notesJSON !== null ? JSON.parse(notesJSON) : [];
}

// always render notes array for show all Notes
function renderNotes() {
  // for empty html tag
  noteList.innerHTML = "";
  // for print all notes in DOM
  notes.map((userNote) => {
    createDOMNote(userNote.note, userNote.done);
  });
}

// create note dom element
function createDOMNote(userNote, done) {
  // create li tag
  const li = document.createElement("li");

  // create done button and append to li tag
  const doneBtn = document.createElement("a");
  doneBtn.classList.add("done");
  doneBtn.textContent = "Done";
  li.appendChild(doneBtn);

  // create note and append to li tag
  const note = document.createElement("span");
  note.textContent = userNote;
  li.appendChild(note);

  // create remove button and append to li tag
  const removeBtn = document.createElement("a");
  removeBtn.classList.add("remove");
  removeBtn.textContent = "Remove";
  li.appendChild(removeBtn);

  // check for note done or undone
  if (done === true) {
    li.classList.add("note-done");
  }

  // append li tag to note list in DOM
  noteList.appendChild(li);
}

// get notes from user => push => save => and render notes
function newNote(e) {
  // prevent page refresh
  e.preventDefault();

  // get note from user
  const note = document.querySelector("#note").value;

  // user note send empty note
  if (note.length < 1) {
    alert("Please Enter Your Note");
  } else {
    // push note to notes array
    notes.push({
      note: note,
      done: false,
    });

    // save note to local storage
    saveNotesToLS();

    // render all notes
    renderNotes();

    //  shake logo slider after submission
    // add shaker class to logo slider
    logoSlider.classList.add("shaker");
    setTimeout(() => {
      // remove shaker class from logo slider after 500ms
      logoSlider.classList.remove("shaker");
    }, 500);
  }
  // empty form input
  form.reset();
}

// save notes to local storage
function saveNotesToLS() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function removeNote(e) {
  // remove note from DOM
  // condition for select remove class from li tag
  if (e.target.classList.contains("remove")) {
    // select li tag and remove
    e.target.parentElement.remove();
    // remove note form local storage
    removeNoteFromLS(
      e.target.parentElement.getElementsByTagName("span")[0].textContent
    );
  }
  // condition for done button
  // select done button

  if (e.target.classList.contains("done")) {
    // select text of note when done
    const textNote = e.target.nextSibling.textContent;

    // note done value true
    notes.map((note) => {
      if (note.note === textNote) {
        note.done = true;
      }
    });
    // add note-done class to li tag
    e.target.parentElement.classList.add("note-done");
    // delete done button after clicked
    e.target.parentElement.children[0].remove();
    //save notes to in local storage after change to done
    saveNotesToLS();
  }
}

// remove note from local storage
function removeNoteFromLS(noteContent) {
  notes.map((item, index) => {
    // find note for deleted
    if (item.note === noteContent) {
      // delete note form notes array
      notes.splice(index, 1);
    }
  });
  // save notes to local storage
  saveNotesToLS();
}
