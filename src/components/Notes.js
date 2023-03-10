import noteContext from '../context/notes/noteContext';
import React, {useContext} from 'react'
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
  const{notes}=context;
  return (
    <>
    <AddNote/>
    <div className="my-3 row">
      <h1 >Your notes</h1>
      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/>;
      })}
    </div>
    </>
  )
}

export default Notes
