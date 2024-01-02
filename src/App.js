import { useEffect, useState } from "react";
import "./index.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Notes } from "./Components/Notes";
import { AddNote } from "./Components/AddNote";

// const initialNotes = [
//   {
//     id: 101,
//     title: "Course",
//     note: "complete exercise 2 of workbook",
//   },

//   {
//     id: 102,
//     title: "Game",
//     note: "play a game with brother",
//   },

//   {
//     id: 103,
//     title: "Market",
//     note: "buy stationary items from market",
//   },
// ];

export default function App() {
  const [allNotes, setAllNotes] = useState(function () {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  function handleDeleteNote(id) {
    setAllNotes((allNotes) => allNotes.filter((note) => note.id !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("notes", JSON.stringify(allNotes));
    },
    [allNotes]
  );

  return (
    <div className="App">
      <Header />
      <AddNote setAllNotes={setAllNotes} />
      {allNotes.length > 0 && (
        <Notes
          allNotes={allNotes}
          onDeleteNote={handleDeleteNote}
          setAllNotes={setAllNotes}
        />
      )}
      <Footer />
    </div>
  );
}
