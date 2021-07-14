import { makeStyles } from "@material-ui/core";
import React, { useCallback, useMemo } from "react";
import db from "../utils/db";
import { ITodo, ITodoState } from "./ITodo";
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  todoStateIcon: {
    alignSelf: 'flex-end',
    borderRadius: '100%',
    boxShadow: '0 5px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)',
    transition: 'transform .5s ease',
    width: '50px',
    height: '50px',
    // backgroundColor: 'green',
    // color: 'white',
    '&:hover': {
      transform: 'scale(1.08)',
      cursor: 'pointer',
    }
  },
}))

export const TodoState = ({ todo }: { todo: ITodo }) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,) => {
    e.stopPropagation();
    let state: ITodoState = todo.state === "done" ? "undone" : "done";
    db.todos.doc(todo.id).set({...todo, state});
  };
  const classes = useStyles();

  return (
    <div onClick={(e) => onClick(e)} style={{alignSelf: 'flex-end'}}>
      {todo.state === 'done' ? <CancelIcon className={classes.todoStateIcon}/> : <CheckCircleIcon className={classes.todoStateIcon}/>}
      {/* {todo.state === "done" ? <Uncheck /> : <Check />} */}
    </div>
  );
};
