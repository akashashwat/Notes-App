import { Note } from "./Note";
import { NoteCounter } from "./NoteCounter";

export function Notes({ allNotes, onDeleteNote, setAllNotes }) {
  return (
    <div className="container">
      <div className="counter">
        <NoteCounter allNotes={allNotes} />
      </div>

      <div className="box">
        {allNotes?.map((note) => {
          return (
            <Note
              note={note}
              key={note.id}
              onDeleteNote={onDeleteNote}
              setAllNotes={setAllNotes}
            />
          );
        })}
      </div>
    </div>
  );
}
