import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import axiosInstance from 'Configs/axiosInstance'

const initialState = {
    bookList: []
}

export const getAllBooks = createAsyncThunk('course/getAllBooks', async () => {
    //todo
    try {
        const response = axiosInstance.get('books');
        toast.promise(response, {
            loading: 'loading books data',
            success: 'Successfully loaded all the books ',
            error: 'Something went wrong'
        })
        return await response;
    } catch (error) {
        toast.error('Something went wrong, cannot download books')
    }
})

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            if (action?.payload?.data?.data) {
                state.bookList = action?.payload?.data?.data
            }
        })
}
)

export default bookSlice.reducer;