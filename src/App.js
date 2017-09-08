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
  // updateBook(newBook,shelf){
  //   BooksAPI.update(newBook,shelf).then((shelf)=>{
  //     book.shelf = shelf
  //     var updateBooks = this.state.books.filter(book => book.id! = n)
  //   }
  //   ).catch(e=>
  //     console.log(e)
  //   )
  // }
  // shouldComponentUpdate (nextProps,nextState){
  //   if((this.state.shelf!=nextState.shelf) || this.state.shelf)
  //   return false;
  // }
  // componentDidUpdate(){
  //   BooksAPI.getAll().then((books)=>{
  //     this.setState({books:books})
      
  //   })
  // }

  // handleChange = (query)=>{
  //   this.setState({query:query.trim()})
  //   if(query){
  //     BooksAPI.search(query,27).then((results)=>{
  //       this.setState({results:results})
  //     })
  //   }
    
  // }

  // handleSelection = (e,book)=>{
  //   // console.log(book)
  //   // console.log(e.target.value)
  //   BooksAPI.update(book,e.target.value).then((tt)=>{
  //     // console.log(tt);
  //     this.setState({showSearchPage:false})
      
  //   })
  // }

  // shouldComponentUpdate(nextProps,nextState){
  //   if(this.state.books !==nextState.books)
  //     return true;
  //   return false;
  // }
  // componentDidUpdate(){
  //   BooksAPI.getAll().then((books)=>{
  //     this.setState({books:books})
  //   })
  // }
 


  render() {  
    //  let myReadBooks,myCurrentlyReadingBooks,myWantToReadBooks;
     
    //  myReadBooks = this.state.books.filter((b)=>b.shelf==='read');
    //  if(!myReadBooks){
    //    myReadBooks = []
    //  }

    //  myCurrentlyReadingBooks = this.state.books.filter((b)=>b.shelf==='currentlyReading');
    //  if(!myCurrentlyReadingBooks){
    //   myCurrentlyReadingBooks = []
    // }
    //  myWantToReadBooks = this.state.books.filter((b)=>b.shelf==='wantToRead');
    //  if(!myWantToReadBooks){
    //   myWantToReadBooks = []
    // }
    

    return (

      <div className="app">
        <Route exact path='/' render={()=>(
          <ListBooks books={this.state.books}
                     onUpdateBook={(book,shelf)=>{
                       this.updateBook(book,shelf)
                     }}/>
        )} />
        <Route path='/search' render={({history})=>(
          <SearchBooks />
        )}/>
      </div>
      // <div className="app">
      //   {this.state.showSearchPage ? (
      //     <div className="search-books">
      //       <div className="search-books-bar">
      //         <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
      //         <div className="search-books-input-wrapper">
      //           {/* 
      //             NOTES: The search from BooksAPI is limited to a particular set of search terms.
      //             You can find these search terms here:
      //             https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
      //             However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      //             you don't find a specific author or title. Every search is limited by search terms.
      //           */}
      //           <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=>this.handleChange(event.target.value)}/>
                
      //         </div>
      //       </div>
      //       <div className="search-books-results">
      //         <ol className="books-grid">
      //           {this.state.results.map((book)=>(
      //             <li key={book.id}>
      //             <div className="book">
      //                     <div className="book-top">
      //                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
      //                       <div className="book-shelf-changer">
      //                         <select value={book.shelf} onChange={(event,aBook)=>this.handleSelection(event,book)}>
      //                           <option value="none" disabled>Move to...</option>
      //                           <option value="currentlyReading">Currently Reading</option>
      //                           <option value="wantToRead">Want to Read</option>
      //                           <option value="read">Read</option>
      //                           <option value="none">None</option>
      //                         </select>
      //                       </div>
      //                     </div>
      //                     <div className="book-title">{book.title}</div>
      //                     <div className="book-authors">{book.author}</div>
      //                   </div>
      //             </li>
      //           ))}
      //         </ol>
      //       </div>
      //     </div>
      //   ) : (
      //     <div className="list-books">
      //       <div className="list-books-title">
      //         <h1>MyReads</h1>
      //       </div>
      //       <div className="list-books-content">
      //         <div>
      //           <div className="bookshelf">
      //             <h2 className="bookshelf-title">Currently Reading</h2>
      //             <div className="bookshelf-books">
      //               <ol className="books-grid">
                      
      //               {myCurrentlyReadingBooks.map((book)=>(
      //             <li key={book.id}>
      //             <div className="book">
      //                     <div className="book-top">
      //                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
      //                       <div className="book-shelf-changer">
      //                         <select value={book.shelf} onChange={(event,aBook)=>this.handleSelection(event,book)}>
      //                           <option value="none" disabled>Move to...</option>
      //                           <option value="currentlyReading">Currently Reading</option>
      //                           <option value="wantToRead">Want to Read</option>
      //                           <option value="read">Read</option>
      //                           <option value="none">None</option>
      //                         </select>
      //                       </div>
      //                     </div>
      //                     <div className="book-title">{book.title}</div>
      //                     <div className="book-authors">{book.author}</div>
      //                   </div>
      //             </li>
      //           ))}
        
      //               </ol>
      //             </div>
      //           </div>
      //           <div className="bookshelf">
      //             <h2 className="bookshelf-title">Want to Read</h2>
      //             <div className="bookshelf-books">
      //               <ol className="books-grid">
      //               {myWantToReadBooks.map((book)=>(
      //             <li key={book.id}>
      //             <div className="book">
      //                     <div className="book-top">
      //                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
      //                       <div className="book-shelf-changer">
      //                         <select value={book.shelf} onChange={(event,aBook)=>this.handleSelection(event,book)}>
      //                           <option value="none" disabled>Move to...</option>
      //                           <option value="currentlyReading">Currently Reading</option>
      //                           <option value="wantToRead">Want to Read</option>
      //                           <option value="read">Read</option>
      //                           <option value="none">None</option>
      //                         </select>
      //                       </div>
      //                     </div>
      //                     <div className="book-title">{book.title}</div>
      //                     <div className="book-authors">{book.author}</div>
      //                   </div>
      //             </li>
      //           ))}
      //               </ol>
      //             </div>
      //           </div>
      //           <div className="bookshelf">
      //             <h2 className="bookshelf-title">Read</h2>
      //             <div className="bookshelf-books">
      //               <ol className="books-grid">
      //               {myReadBooks.map((book)=>(
      //             <li key={book.id}>
      //             <div className="book">
      //                     <div className="book-top">
      //                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
      //                       <div className="book-shelf-changer">
      //                         <select value={book.shelf} onChange={(event,aBook)=>this.handleSelection(event,book)}>
      //                           <option value="none" disabled>Move to...</option>
      //                           <option value="currentlyReading">Currently Reading</option>
      //                           <option value="wantToRead">Want to Read</option>
      //                           <option value="read">Read</option>
      //                           <option value="none">None</option>
      //                         </select>
      //                       </div>
      //                     </div>
      //                     <div className="book-title">{book.title}</div>
      //                     <div className="book-authors">{book.author}</div>
      //                   </div>
      //             </li>
      //           ))}
      //               </ol>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="open-search">
      //         <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      //       </div>
      //     </div>
      //   )}
      // </div>
      
    )
  }
}

export default BooksApp
