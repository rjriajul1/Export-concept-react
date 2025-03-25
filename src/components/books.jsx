
import Book from './book'
export default function Books ({books}){
    
    return(
        <div className='singer'>
            <h1>My national Central Libary: </h1>
            <h2>Address :</h2>
            <h2>BOOK CLECTION: {books.length}</h2>
            <ul>
                {
                  books.map(book=> <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    )
}