import React, { useState } from 'react';

const NoteInput = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleCharLimit = 50;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= titleCharLimit) {
      setTitle(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '' || body.trim() === '') return;

    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    onSubmit(newNote);

    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-input">
      {/* <p className="note-input__title__char-limit">{titleCharLimit - title.length} karakter tersisa</p> */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
        maxLength="50"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteInput;
