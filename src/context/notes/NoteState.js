import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host="http://localhost:5000"
    const notesInitial = []
const [notes, setNotes] = useState(notesInitial);

//Get all Notes
const getNotes=async ()=>{
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzNhZGI3YjEzYzNlODIwNTFlNjMwIn0sImlhdCI6MTY3NzkzNjE0N30.3dEq5hVk9AcdhOM0AWcM-31IzQdTF60xt0QfbnBVAPo"
        },
      });
      const json= await response.json()
      console.log(json)
      setNotes(json)
}

//Add a Note
const addNote=async (title, description, tag)=>{
    //TODO- API call
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzNhZGI3YjEzYzNlODIwNTFlNjMwIn0sImlhdCI6MTY3NzkzNjE0N30.3dEq5hVk9AcdhOM0AWcM-31IzQdTF60xt0QfbnBVAPo"
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json= response.json(); 
    console.log("Adding a new note")
    const note = {
        "_id": "64046789539f6c36303awe115",
        "user": "64033adb7b13c3e82051e630",
        "title": title,
        "description": description,
        "tag":tag,
        "date": "2023-03-05T09:57:29.220Z",
        "__v": 0
    };
    setNotes(notes.concat(note))
}

//Delete a Note
const deleteNote=async (id)=>{
    //TODO- API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzNhZGI3YjEzYzNlODIwNTFlNjMwIn0sImlhdCI6MTY3NzkzNjE0N30.3dEq5hVk9AcdhOM0AWcM-31IzQdTF60xt0QfbnBVAPo"
        },
      });
      const json= response.json(); 
    console.log("Deleting note with id "+ id);
    const newNotes= notes.filter((note)=>{return note._id!=id})
    setNotes(newNotes)
}

//Edit a Note
const editNote=async (id, title, description, tag)=>{
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzNhZGI3YjEzYzNlODIwNTFlNjMwIn0sImlhdCI6MTY3NzkzNjE0N30.3dEq5hVk9AcdhOM0AWcM-31IzQdTF60xt0QfbnBVAPo"
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json= response.json(); 
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
        }
    }
}

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
