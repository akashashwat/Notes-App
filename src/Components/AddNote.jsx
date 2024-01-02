import { useState } from "react";

export function AddNote({ setAllNotes }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !note) return;

    const newNote = { id: Date.now(), title, note };
    setAllNotes((notes) => [...notes, newNote]);
    console.log(newNote);
    setTitle("");
    setNote("");
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleFormSubmit}>
        {isExpanded && (
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <hr />
          </div>
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note}
          onClick={expand}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button className="add-btn">&#43;</button>
      </form>
    </div>
  );
}
