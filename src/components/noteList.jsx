import React from 'react';
import NoteItem from './noteItem';

const NotesList = ({ notes, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <h2>Active Notes</h2>
      {activeNotes.length > 0 ? (
        <div className="notes-list">
          {activeNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">No notes active</p>
      )}

      <h2>Archive Notes</h2>
      {archivedNotes.length > 0 ? (
        <div className="notes-list">
          {archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">No notes archived</p>
      )}
    </div>
  );
};

export default NotesList;
