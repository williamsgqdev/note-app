import { useEffect, useState } from "react";
import {nanoid} from 'nanoid'
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
const [notes , setNotes] = useState([
  {
    id: nanoid() ,
    text:'This is my first note' ,
    date : '12/07/2021'
  },
  {
    id: nanoid() ,
    text:'This is my second note' ,
    date : '16/07/2021'
  },
  {
    id: nanoid() ,
    text:'This is my third note' ,
    date : '22/07/2021'
  }
])
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-note-app'))

  if(savedNotes){
    setNotes(savedNotes)
  }
},[])


useEffect(()=>{
 localStorage.setItem('react-note-app-data' , JSON.stringify(notes))

},[notes])

const [noteColor , setNoteColor] = useState('#fef68a') ;
const [searchText , setSearchText] = useState('')
const[darkMode , setDarkMode] = useState(false)
const addNote = (text) =>{
  const date = new Date() ;
    const newNote ={
      id : nanoid() ,
      text : text ,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes , newNote]

    setNotes(newNotes)
}
const deleteNote = (id) =>{
   const newNotes = notes.filter((note)=>note.id !== id) ;
    setNotes(newNotes);
}

const readText =(id) =>{
  const speech = new SpeechSynthesisUtterance() ;
  speech.lang = 'en'
  speech.text = notes.filter((note) =>( note.id === id)).map((note) => note.text)
  window.speechSynthesis.speak(speech);
}
 const colorPicker = (e) =>{
     setNoteColor(e.target.value);
     console.log(e.target.value);
 }
  return ( 
    <div className={`${darkMode && '&& dark-mode'} `}>
         <div className="container">
       <Header handleToggleDarkMode = {setDarkMode} handleColorPicker = {colorPicker} />
        <Search handleSearchNote = {setSearchText}/>
        <NoteList notes = {notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote = {deleteNote} 
        handleNoteSpeech = {readText}
        noteColor = {noteColor}
        setNoteColor={setNoteColor}
        
        
        />
    </div>
    </div>
   

   );
}
 
export default App;