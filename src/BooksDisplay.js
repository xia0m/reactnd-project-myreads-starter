import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Shelf extends Component { 

    render(){
        const bookShelfTitle = ['Currently Reading','Want to Read','Read']
        return (
           <div>
               {bookShelfTitle.map((theShelf)=>{
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">{theShelf}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid"> 
                            {myCurrentlyReading.map((book)=>(                                       
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={(event,aBook)=>this.handleChange(event,book)}>
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
               })}
           </div>
     
        )
    }
}

export default Shelf
