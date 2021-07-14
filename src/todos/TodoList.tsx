import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import db from "../utils/db";
import { ITodo, ITodoState } from "./ITodo";
import { Todo } from "./Todo";
import {
  changeFilterTodoState,
  fetchData,
  FilterTodoState,
  selectFilterTodoState,
  selectIsLoading,
  selectTodosData,
} from "./todosSlice";

const selectedStateStyle = {
  borderTopColor: "steelblue",
  color: "steelblue",
};

export const TodoList = () => {
  // const { data = [], isFetching } = useFetchTodosQuery();
  const dispatch = useAppDispatch();
  // const filterTodoState = useAppSelector(selectFilterTodoState);
  // const allTodos = useAppSelector(selectTodosData);
  const isLoading = useAppSelector(selectIsLoading);

  const [filterTodoState, setFilterTodoState] = useState<FilterTodoState>('all');
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [data, setData] = useState<ITodo[]>([]);

  useEffect(() => {
    return db.todos.onSnapshot((snapshot) => {
      const todoData: ITodo[] = [];
      snapshot.forEach((doc) =>
        // todoData.push({ ...(doc.data() as ITodo), id: doc.id })
        todoData.push(doc.data())
      );
      console.log(JSON.stringify(todoData));
      setAllTodos(todoData);
    });
  }, []);

  // useEffect(() => {
  //   dispatch(fetchData())
  // }, [])

  useEffect(() => {
    setData(
      filterTodoState === "all"
        ? allTodos
        : allTodos.filter((todo) => todo.state === filterTodoState)
    );
  }, [filterTodoState, allTodos]);

  return (
    <div>
      <div className="todo-filter-state-container">
        <button
          // onClick={() => dispatch(changeFilterTodoState("all"))}
          onClick={() => setFilterTodoState('all')}
          style={filterTodoState === "all" ? selectedStateStyle : {}}
        >
          ALL
        </button>
        <button
          // onClick={() => dispatch(changeFilterTodoState("done"))}
          onClick={() => setFilterTodoState("done")}
          style={filterTodoState === "done" ? selectedStateStyle : {}}
        >
          DONE
        </button>
        <button
          // onClick={() => dispatch(changeFilterTodoState("undone"))}
          onClick={() => setFilterTodoState("undone")}
          style={filterTodoState === "undone" ? selectedStateStyle : {}}
        >
          UNDONE
        </button>
      </div>
      <div className="todo-list-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((todo) => <Todo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
};
