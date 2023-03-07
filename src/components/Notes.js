import noteContext from '../context/notes/noteContext';
import React, {useContext} from 'react'
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
  const{notes, setNotes}=context;
  return (
    <div className="my-3 row">
      <h1 >Your notes</h1>
      {notes.map((note)=>{
        return <Noteitem note={note}/>;
      })}
    </div>
  )
}

export default Notes
