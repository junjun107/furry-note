import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function NoteCard({ note, onDelete, id }) {
  const clickHandler = () => {
    onDelete(id);
  };
  const { title, content } = note;
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={clickHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default NoteCard;
