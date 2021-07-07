import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const NoteInput = ({ onAdd }) => {
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });
  const [isExpaned, setIsExpanded] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputText((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };
  const submbitNoteHandler = (e) => {
    e.preventDefault();
    //check input is empty
    if (inputText.title.trim().length === 0) {
      alert('Note cannot be empty');
      return;
    }

    onAdd(inputText);
    setInputText({
      title: '',
      content: '',
    });
  };

  //toggle expand
  const toggleExpand = () => {
    setIsExpanded(true);
  };
  return (
    <div>
      <form className='create-note'>
        {isExpaned && (
          <input
            placeholder='Enter a title'
            name='title'
            value={inputText.title}
            onChange={inputChangeHandler}
          />
        )}

        <textarea
          onClick={toggleExpand}
          placeholder='Write a note...'
          name='content'
          value={inputText.content}
          onChange={inputChangeHandler}
          row={isExpaned ? 3 : 1}
        />
        <Fab onClick={submbitNoteHandler}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default NoteInput;
