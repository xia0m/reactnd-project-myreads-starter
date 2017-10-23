import React, { Component } from 'react';


class ChangeShelf extends Component {

    handleChange=(e,book)=>{
        if(this.props.onUpdateBook)
            this.props.onUpdateBook(book,e.target.value)
     }

    render(){
        return (
            
            <ol className="books-grid"> 
                {  
                    this.props.shelfBooks.map((book)=>(                                       
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
        
        )
    }
}

export default ChangeShelf