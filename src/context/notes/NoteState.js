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
            "_id": "64046789539f6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },
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
            "_id": "64046789539f6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },
        {
            "_id": "64046789539f6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        },{
            "_id": "64046789539f6c36303ae115",
            "user": "64033adb7b13c3e82051e630",
            "title": "The title",
            "description": "The description",
            "tag": "Personal",
            "date": "2023-03-05T09:57:29.220Z",
            "__v": 0
        }
    ]
const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
