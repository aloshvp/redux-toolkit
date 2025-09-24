import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning Redux ToolKit", content: "State management ..........." },
    { id: "2", title: "Lorem ", content: "Lorem ipsum ......" }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer;