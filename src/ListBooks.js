import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ChangeShelf from './ChangeShelf'


class ListBooks extends Component {

    // handleChange = (e,book)=>{
    //    if(this.props.onUpdateBook)
    //     this.props.onUpdateBook(book,e.target.value)
    // }
    
    render(){
        const {books} = this.props;
        const bookShelfTitle = [{name:'currentlyReading',displayName:'Currently Reading'},
                                {name:'wantToRead',displayName:'Want to Read'},
                                {name:'read',displayName:'Read'}]
       
        return (
            
                <div className="list-books">
                   <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {bookShelfTitle.map((theShelf)=>{
                        let myBook = books.filter((b)=>b.shelf===theShelf.name)

                        return(                      
                        <div className="list-books-content">
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{theShelf.displayName}</h2>
                                <div className="bookshelf-books">
                                    <ChangeShelf shelfBooks={myBook}
                                                onUpdateBook={this.props.onUpdateBook}/>
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