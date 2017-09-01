import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

    state = {
        query:''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
      }
    
    clearQuery = () => {
        this.setState({ query: '' })
    }

    render(){

        const {books} = this.props
        const {query} = this.state

        let showingBooks

        if(query){
            const match = new RegExp(escapeRegExp(query),'i')
            showingBooks = books.filter((book)=>match.test(book.name))
        } else {
            showingBooks = books
        }

        showingBooks.sort(sortBy('title'))

        return (
            <div className='list-books'>

            </div>
        )
    }
}

export default ListBooks