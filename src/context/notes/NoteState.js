import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64046789539f6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },
        {
            "_id": "64046789539rf6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },
        {
            "_id": "64046789539gf6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },
        {
            "_id": "6404g6789539f6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },
        {
            "_id": "64046789539f6c36a303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },{
            "_id": "64046789539f6c36303awe115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        }
    ]
const [notes, setNotes] = useState(notesInitial);

//Add a Note
const addNote=(title, description, tag)=>{
    //TODO- API call
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
const deleteNote=(id)=>{
    //TODO- API call
    console.log("Deleting note with id "+ id);
    const newNotes= notes.filter((note)=>{return note._id!=id})
    setNotes(newNotes)
}

//Edit a Note
const editNote=(id, title, description, tag)=>{
    
}

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
