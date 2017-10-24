import React  from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books:[],
    shelf:[]
  
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
      
    })
  }

  updateBook = (book,shelf) => {
    BooksAPI.update(book,shelf).then(() =>{
      book.shelf = shelf
      var updatedBooks = this.state.books.filter( b=> b.id !== book.id )
      updatedBooks.push(book);
      this.setState({ books: updatedBooks })
    })
  }

  render() {  
  
    return (

      <div className="app">
         
        <Route exact path='/' render={()=>(
          <ListBooks books={this.state.books}
                     onUpdateBook={(book,shelf)=>{
                       this.updateBook(book,shelf)
                     }}/>
        )} />
        <Route path='/search' render={({history})=>(
          <SearchBooks onUpdateBook={(book,shelf)=>{
                        this.updateBook(book,shelf)
                        history.push('/')}}/>
        )}/>
      </div>
      
    )
  }
}

export default BooksApp
