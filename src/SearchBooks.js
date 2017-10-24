import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ChangeShelf from './ChangeShelf'

class SearchBooks extends Component {

    state = {
        query:'',
        searchResults:[]
    }

    
    handleSearch = (query) => {
        this.setState({query:query})
        BooksAPI.search(query,7).then((searchResults) => {
            if (!searchResults || searchResults.error){
              this.setState({searchResult : []})
              return searchResults
            } else if (Array.isArray(searchResults)) {
                this.setState({searchResults:searchResults})
            } })
            .catch(e => console.log(e))
    }

    handleChange = (e,book)=>{
        if(this.props.onUpdateBook)
         this.props.onUpdateBook(book,e.target.value)
     }

    render(){
        let results;
        if(this.state.searchResults){
            results = this.state.searchResults
        } else {
            results = [1];
        }
            


        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to='/' className="close-search"></Link>
                        <div className="search-books-input-wrapper">
                            <input  type="text" 
                                    placeholder="Search by title or author" 
                                    value={this.state.query}
                                    onChange={(event)=>this.handleSearch(event.target.value)}
                                    />
                        </div>
                    </div>
                <div className="search-books-results">
                
                    <ChangeShelf shelfBooks={results} 
                                 onUpdateBook={this.props.onUpdateBook}/>
                    {/* <ol className="books-grid">
                    {results.map((book)=>(                                       
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
                    </ol> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks