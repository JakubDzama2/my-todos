import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../todos/ITodo";

export const todoApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: (builder) => {
        return {
            fetchTodos: builder.query<ITodo[], void>({
                query: () => {
                    return '/todos';
                }
            }),
        }
    }
});

export const { useFetchTodosQuery } = todoApiSlice;