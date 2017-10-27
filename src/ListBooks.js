import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ChangeShelf from './ChangeShelf'


class ListBooks extends Component {
    /**
     * @description list the books on the shelf, the books are from existing library, put them into
     *              corresponding shelf
     * @returns the JSX representation of all the books
     */
    render(){
        const {books} = this.props;

        /* divided the books to three shelves each with the corresponding name*/
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