import { saveData, getData } from "./storage.js";

let notes = getData("notes");

document.getElementById("saveNotesBtn").onclick = () => {
  const text = document.getElementById("notesArea").value;

  notes.push({
    date: new Date().toLocaleString(),
    text
  });

  saveData("notes", notes);

  alert("✅ Notes saved with timestamp!");
};