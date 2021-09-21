import {MdDeleteForever , MdVolumeUp} from 'react-icons/md'
const Note = ({id , text , date , handleDeleteNote , handleNoteSpeech , noteColor}) => {

    

    // let changeColor = () => {
    //     setNoteColor(noteColor = "black")
    // }

    return (
        <div className="note" key={id} style = {{
            backgroundColor : noteColor
            }
            }>
            <div className="note-top">
                < MdVolumeUp style = {{
                    marginRight:'10px'  ,
                    cursor : 'pointer'
                }} onClick= {()=> handleNoteSpeech(id)}/>
                   <span> {text}</span> 
            </div>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever onClick={()=>{handleDeleteNote(id)}} className='delete-icon' size='1.3em'  />
            </div>
        </div>
      );
}
 
export default Note;