import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiFetchTodoData, apiModifyTodo } from "../api/client";
import { AppThunk, RootState } from "../app/store";
import { ITodo } from "./ITodo";

export type FilterTodoState = "all" | "done" | "undone";

export interface TodosState {
  filterTodoState: FilterTodoState;
  data: ITodo[];
  loading: boolean;
}

const initialState: TodosState = {
  filterTodoState: "all",
  data: [],
  loading: false,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  return (await apiFetchTodoData()).todos;
});

const modifyTodo = createAsyncThunk("modifyTodo", async (todo: ITodo) => {
  const data = await apiModifyTodo(todo.id, todo);
  console.log(JSON.stringify(data));
  return data;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeFilterTodoState: (state, action: PayloadAction<FilterTodoState>) => {
      state.filterTodoState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const modifyTodoAndRefresh =
  (todo: ITodo): AppThunk =>
  (dispatch, getState) => {
    Promise.resolve(dispatch(modifyTodo(todo))).then(() =>
      dispatch(fetchData())
    );
  };

export const { changeFilterTodoState } = todosSlice.actions;

export const selectFilterTodoState = (state: RootState) =>
  state.todos.filterTodoState;
export const selectTodosData = (state: RootState) => state.todos.data;
export const selectIsLoading = (state: RootState) => state.todos.loading;

export default todosSlice.reducer;
