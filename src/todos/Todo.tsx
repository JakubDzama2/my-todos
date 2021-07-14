import React from "react";
import { useHistory } from "react-router-dom";
import { ITodo, ITodoPriority, ITodoState } from "./ITodo";
import { TodoState } from "./TodoState";
import "./todo.css";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

interface ITodoProps {
  todo: ITodo;
}

const priorityToString = (priority: ITodoPriority) =>
  (priority + " priority").toUpperCase();

const useStyles = makeStyles((theme) => ({
  todoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0px 15px 15px 15px',
    margin: '5px',
    backgroundColor: 'white',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(246, 248, 255)'
    }
  },
  todoTitle: {
    fontWeight: 900,
  },
  todoCreatedAt: {
    fontSize: '14px',
    fontFamily: 'monospace',
  },
  todoPriority: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  todoContent: {
    paddingTop: '15px',
    fontFamily: 'Courier New, Courier, monospace',
  },
  
}));

const priorityStyles = {
  low: {
    color: "#48eb28",
  },
  medium: {
    color: "#ccb012",
  },
  high: {
    color: "#db2e3a",
  },
};

export const Todo = (props: ITodoProps) => {
  const { todo } = props;
  console.log(JSON.stringify(todo));
  const history = useHistory();
  const showDetail = () => {
    history.push(`/todos/${todo.id}`);
  };
  const classes = useStyles()
  const priorityColor = priorityStyles[todo.priority].color;
  
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      justifyContent='center'
      p='0px 15px 15px 15px'
      bgcolor='white'
      boxShadow='0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
    >
      <Typography  />
    </Box>
  )
  return (
    <div className={classes.todoContainer} onClick={showDetail}>
      <h2 className={classes.todoTitle}>{todo.title}</h2>
      <div className={classes.todoCreatedAt}>{todo.createdAt?.toDateString()}</div>
      <div className={classes.todoPriority} style={{ color: priorityColor }}>
        {priorityToString(todo.priority)}
      </div>
      <div className={classes.todoContent}>{todo.content}</div>
      {/* <div className="todo-icon-container"> */}
      <TodoState todo={todo} />
      {/* </div> */}
    </div>
  );

};
