import React, { useEffect } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import './index.css';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "this is my first text",
      date: "24/04/2021"
    },
    {
      id: nanoid(),
      text: "this is my second text",
      date: "24/04/2022"
    },
    {
      id: nanoid(),
      text: "this is my third text",
      date: "24/04/2023"
    },
    {
      id: nanoid(),
      text: "this is my fourth text",
      date: "24/04/2024"
    }
  ]);


  const [searchText, setSearchText] = React.useState('');

  const [darkMode, setDarkMode] = React.useState(false);


  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, [])


  React.useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))

  }, [notes])





  
 




  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };

    const newNotes = [...notes , newNote]
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
     const newNotes =   notes.filter((note) => note.id !== id);
     setNotes(newNotes)
  }


  return (
    <div className= {`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header 
          handleToggleDarkMode = {setDarkMode}
        />
       <Search handleSearchNote={setSearchText}   />
        <NotesList 
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText))}

          addingNote = {addNote}
          handleDeleteNote = {deleteNote}
         />
    </div>
  </div>
    
  );
};

export default App;