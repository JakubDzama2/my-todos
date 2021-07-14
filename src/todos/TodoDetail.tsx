import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import db from "../utils/db";
import { ITodo, ITodoState } from "./ITodo";

interface ITodoDetailProps {
    id: string;
} 

export const TodoDetail = ({ match }: RouteComponentProps<ITodoDetailProps>) => {
    const { id } = match.params;
    const [todo, setTodo] = useState<ITodo|undefined>(undefined);
    useEffect(() => {
        db.todos.doc(id).get().then((doc) => {
            setTodo(doc.data())
        })
    }, []);
    console.log(id);
    return <>
        <h2>{todo?.title}</h2>
        <h2>{todo?.title}</h2>
    </>;
}