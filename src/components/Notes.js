import noteContext from '../context/notes/noteContext';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({etitle: "", edescription: "", etag: ""})

  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes()
  }, [])
  const ref = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

  const handleClick=(e)=>{
    e.preventDefault();
    console.log("Updating the note", note)
}

const onChange=(e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}

  return (
    <>
      <AddNote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div  className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 row">
        <h1 >Your notes</h1>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  )
}

export default Notes
