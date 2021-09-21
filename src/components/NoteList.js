import AddNote from "./AddNote";
import Note from "./Note";
const NoteList = ({notes , handleAddNote , setNoteColor, texts, setTexts, handleDeleteNote , handleNoteSpeech , noteColor , handleColorPicker}) => {
    return (  
      <div className="note-list">
          {notes.map((note)=>(
             <Note id={note.id}
              texts={texts}
              setTexts={setTexts}
              text = {note.text}
              setNoteColor={setNoteColor} 
              date ={note.date}
              handleDeleteNote = {handleDeleteNote}
              handleNoteSpeech = {handleNoteSpeech}
              noteColor = {noteColor}
              handleColorPicker = {handleColorPicker}/> 
          ))}
        <AddNote handleAddNote={handleAddNote}/>                      
      </div>
    );
}
 
export default NoteList;