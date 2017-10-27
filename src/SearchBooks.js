import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ChangeShelf from './ChangeShelf'

class SearchBooks extends Component {

    state = {
        query:'',
        searchResults:[]
    }
    /**
     * @description Handle the query typed in search bar
     * @param {String} query - a search query
     */
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
        /* make sure the search result is not an empty string */
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
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks