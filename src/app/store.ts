import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { todoApiSlice } from '../api/apiSlice';
import todoReducer from '../todos/todosSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer
        // [todoApiSlice.reducerPath]: todoApiSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat(todoApiSlice.middleware)
    // }
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;