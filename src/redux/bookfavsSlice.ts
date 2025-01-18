import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../types/book";

interface BookfavsState {
  books: Book[];
}
const initialState: BookfavsState = {
  books: [],
};
const bookfavsSlice = createSlice({
  name: "bookfavs",
  initialState,
  reducers: {
    addBookfav(state, action: PayloadAction<Book>) {
      const alreadyBookfavorites = state.books.some(
        (book) => book.isbn13 === action.payload.isbn13
      );
      if (!alreadyBookfavorites) {
        state.books.push(action.payload);
      }
    },
    removeBookfav(state, action: PayloadAction<string>) {
      state.books = state.books.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
  },
});

export const { addBookfav, removeBookfav } = bookfavsSlice.actions;
export default bookfavsSlice.reducer;
