export function NoteCounter({ allNotes }) {
  return <h4 className="note-count">Notes: {allNotes?.length}</h4>;
}
