import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ListBooks extends Component {

    handleChange = (e,book)=>{
       if(this.props.onUpdateBook)
        this.props.onUpdateBook(book,e.target.value)
    }
    
    render(){
        const {books} = this.props;
        const bookShelfTitle = [{name:'currentlyReading',displayName:'Currently Reading'},
                                {name:'wantToRead',displayName:'Want to Read'},
                                {name:'read',displayName:'Read'}]
       
        return (
            
                <div className="list-books">
                   
                    {bookShelfTitle.map((theShelf)=>{
                        let myBook = books.filter((b)=>b.shelf===theShelf.name)

                        return(                      
                        <div className="list-books-content">
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{theShelf.displayName}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid"> 
                                        {  
                                            myBook.map((book)=>(                                       
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
                        </div>
                        )
                    })}
            <Link to='/search' className="open-search" id="add">Add a book</Link>
            
          </div>          
        )
    }
}

export default ListBooks