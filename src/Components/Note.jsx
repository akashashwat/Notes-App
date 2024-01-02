import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export function Note({ onDeleteNote, note, setAllNotes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedNote, setEditedNote] = useState(note.note);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setAllNotes((prevNotes) => {
      return prevNotes.map((n) => {
        if (n.id === note.id) {
          return { ...n, title: editedTitle, note: editedNote };
        }
        return n;
      });
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(note.title);
    setEditedNote(note.note);
  };

  return (
    <div className="note" key={note.id}>
      {isEditing ? (
        <div className="edit">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <hr />
          <textarea
            value={editedNote}
            onChange={(e) => setEditedNote(e.target.value)}
          ></textarea>
          <div className="button">
            <button className="save-btn" onClick={handleSave}>
              <SaveIcon />
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              <CancelIcon />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>{note.title}</h1>
          <hr />
          <p>{note.note}</p>
          <div className="button">
            <button className="edit-btn" onClick={handleEdit}>
              <EditIcon />
            </button>
            <button className="del-btn" onClick={() => onDeleteNote(note.id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
