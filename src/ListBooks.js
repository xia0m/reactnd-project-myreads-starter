import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
   
    render(){
        const {books} = this.props;
        let myCurrentlyReading = books.filter((b)=>b.shelf==="currentlyReading")
        let myWantToRead = books.filter((b)=>b.shelf==="wantToRead")
        let myRead = books.filter((b)=>b.shelf==="read")
       
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid"> 
                                    {myCurrentlyReading.map((book)=>(                                       
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                     </div>
                                                    
                                              </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.author}</div>
                                                </div>
                                           
                                        </li>
                                    ))}    
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid"> 
                                {myWantToRead.map((book)=>(                                       
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                     </div>
                                                    
                                              </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.author}</div>
                                                </div>
                                           
                                        </li>
                                    ))}                        
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {myRead.map((book)=>(                                       
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                     </div>
                                                    
                                              </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.author}</div>
                                                </div>
                                           
                                        </li>
                                    ))}    
                                </ol>
                            </div>
                        </div>             
                    </div>
            {/* <Link to='/search' className="open-search" id="add">Add a book</Link> */}
            
          </div>
        
      </div>
           
        )
    }
}

export default ListBooks