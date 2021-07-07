import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NoteCard from './NoteCard';

import NoteInput from './NoteInput';

function App() {
  const [notes, setNotes] = useState([]);

  //onAdd receive a note object, pass down to NoteInput
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  //onDelete
  const deleteNote = (id) => {
    //console.log('delete button clicked');
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <NoteInput onAdd={addNote} />
      {notes.map((item, index) => (
        <NoteCard key={index} id={index} note={item} onDelete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
