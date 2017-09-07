import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

    // state = {
    //     query:''
    // }

    // updateQuery = (query) => {
    //     this.setState({ query: query.trim() })
    //   }
    
    // clearQuery = () => {
    //     this.setState({ query: '' })
    // }

    render(){


        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to='/' className="close-search"></Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" />
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default SearchBooks