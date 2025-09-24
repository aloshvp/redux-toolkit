import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Getting Started with Redux Toolkit",
        content: "Redux Toolkit is the official, recommended way to write Redux logic. It provides simple APIs to manage global state, reduces boilerplate, and makes your code easier to maintain."
    },
    {
        id: "2",
        title: "Why React and Redux Work Well Together",
        content: "React manages the UI while Redux manages the state. Together, they make it easier to build predictable, testable, and scalable applications with clear separation of concerns."
    },
    {
        id: "3",
        title: "Async Logic with Redux Toolkit",
        content: "With createAsyncThunk and extraReducers, Redux Toolkit simplifies handling async operations like data fetching, loading states, and error handling."
    },
    {
        id: "4",
        title: "Writing Cleaner Reducers",
        content: "Instead of manually writing action types and switch cases, Redux Toolkit lets you define reducers directly inside createSlice, making your code shorter and easier to understand."
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;