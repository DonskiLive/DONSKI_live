import React from 'react'
import '../css/App.css';
import Title from './Title';
import { getBooks } from '../store/store.js'
import BookList from './BookList';
import BookFullInfo from './BookFullInfo';
import ModalWindow from './ModalWindow';

export const MyContext = React.createContext(); // MyContext - any name!



/* function getCards(){
  return [
    {title: "Card-1",
    subtitle: "Subtitle1",
    text: "some text1",
    src: '../favicon.ico'},
    {title: "Card-2",
    subtitle: "Subtitle2",
    text: "some text2",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png"},
    {title: "Card-3",
    subtitle: "Subtitle3",
    src: '../favicon.ico'}
  ]
} */
/* export const books = getBooks()
console.log(books) */
export default class App extends React.Component {
  state = {
    books: getBooks(),
    currentBook: null,
    orderMode: false,
    orderText1: '',
    orderText2: ''
  }

  onIncClickHandler = (id) => {
    const newBooks = [...this.state.books]
    const index = newBooks.findIndex(book => book.id === id)
    if (index >= 0 && newBooks[index].quantity < 10) {
      const book = { ...newBooks[index] }
      book.quantity++
      newBooks[index] = book;
      this.setState({ ...this.state, books: newBooks })
      /*     newBooks[index].quantity++
          console.log(newBooks[index].quantity) */
    }
  }

  onDecClickHandler = (id) => {
    const newBooks = [...this.state.books]
    const index = newBooks.findIndex(book => book.id === id) // if not found -1
    if (index >= 0 && newBooks[index].quantity > 0) {
      const book = { ...newBooks[index] }
      book.quantity--
      newBooks[index] = book;
      this.setState({ ...this.state, books: newBooks })
      /*     newBooks[index].quantity++
          console.log(newBooks[index].quantity) */
    }
  }

  orderHandler = () => {
    const orderBooks = this.state.books.filter(book => book.quantity > 0)
    let orderMessage1 = 'Your order: '
    let orderMessage2 = ''
    if (orderBooks.length) {
      orderBooks.forEach(b => orderMessage1 += `${b.title}, `)
      orderMessage2 = `sum of your order: ${orderBooks.reduce((sum, b) => sum += b.quantity * b.price, 0)}`
    }else{
      orderMessage1 += 'is empty'
    }
    this.setState({ ...this.state, orderMode: true, orderText1: orderMessage1, orderText2: orderMessage2})
  }

  closeModalClick =() =>{
    this.setState({ ...this.state, orderMode: false})
  }

  imgClickHandler = (id) => {
    const index = this.state.books.findIndex(b => b.id === id)
    const newCurrent = { ...this.state.books[index] }
    this.setState({ ...this.state, currentBook: newCurrent })
  }

  closeClickHandler = () => {
    this.setState({ ...this.state, currentBook: null }) // ...this.state - ?????????????????????????? ?????? ?????? ?? state ?? ?????????? ?????????????? ???????????????????? ?? ???????? ???????????????????????? ??????????????. ?????????? ?????????????? ?????????? ?????????????????? ???????? ?? ???????????? state, ?????????? ??????????????
  }

  

  render() {
    return (
      <div className="App">
        <Title title='Bestseller / Buy Now!' />
        <MyContext.Provider value={{
          /* book_1_title: this.state.books[0].title, */
          /* books: this.state.books, */
          onIncClickHandler: this.onIncClickHandler,
          onDecClickHandler: this.onDecClickHandler,
          imgClickHandler: this.imgClickHandler
        }}>{
            this.state.currentBook ?
              <BookFullInfo book={this.state.currentBook}
                closeClickHandler={this.closeClickHandler} /> :
              <>
                <BookList books={this.state.books} />
                <button className="order-button" onClick={this.orderHandler}>ORDER</button>

              </>
          }
          {this.state.orderMode ? <ModalWindow message1={this.state.orderText1}
          message2={this.state.orderText2}
          closeModalClick = {this.closeModalClick} /> : ''}

        </MyContext.Provider>



      </div>
    );
  }
}

/* function App() {
return (
    <div className="App">
      <Title title='My best page' />
      <BookList books={books} />
    </div>
  );
} */
/*
const cards =[
  {title: "Card-1",
  subtitle: "Subtitle1",
  text: "some text1",
  src: '../favicon.ico'},
  {title: "Card-2",
  subtitle: "Subtitle2",
  text: "some text2",
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png"},
  {title: "Card-3",
  subtitle: "Subtitle3",
  src: '../favicon.ico'}
]



function App() {
  return (
    <div className="App">
      <Title title='My best page' />
      <Title />

    <CardList cards={cards}/>
    </div>
  );
} */

/* export default App; */
