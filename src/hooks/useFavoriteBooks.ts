import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { addBookfav, removeBookfav } from "../redux/bookfavsSlice";
import { Book } from "../types/book";



export const useFavoriteBooks = () => {
const dispatch:AppDispatch = useDispatch()

const bookFavs = useSelector((state: RootState) => state.bookfavs.books);

const addToBookfavs = (book:Book)=>{
    dispatch(addBookfav(book))
}

const removeFromBookfavs = (bookId: string) => {
    dispatch(removeBookfav(bookId))
}

const checkInBookfavs = (bookId: string) => {
    return bookFavs.some(book => book.isbn13 === bookId )
}

return {
    bookFavs,
    addToBookfavs,
    removeFromBookfavs,
    checkInBookfavs   
} 
}
