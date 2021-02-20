import React from 'react'
import styles from './styles/MovieCardStyle.module.scss'

const MovieCard = ({ movie }) => {
    return (
        <div className={styles.movieCard}>
            <div style={{ borderRight: '5px grey solid', marginRight: 10, fontSize: 17 }}>
                Movie Details
                <p> Name : {movie.name}</p>
                <p>Genre : {movie.genre}</p>
                <p>Year : {movie.id}</p>
            </div>
            <div>
                some image
            </div>
        </div>
    )
}

export default MovieCard


// import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import { getBookQuery } from '../../queries/queries';
// import styles from './styles/MovieCardStyle.module.scss'

// class MovieCard extends Component {
//     displayBookDetails() {
//         const { book } = this.props.data;
//         console.log('Groot', book)
//         if (book) {
//             return (
//                 <div className={styles.movieCard}>
//                     {/* <h2>{book.name}</h2>
//                     <p>{book.genre}</p>
//                     <p>{book.author.name}</p> */}
//                     <p>All books by this author:</p>
//                     <ul className="other-books">
//                         {book.author.books.map(item => {
//                             return <li >shaba</li>
//                             // return <li key={item.id}>{item.name}</li>
//                         })}
//                     </ul>
//                 </div>
//             );
//         } else {
//             return (<div>No book selected...</div>);
//         }
//     }
//     render() {
//         return (
//             <div id="book-details">
//                 { this.displayBookDetails()}
//             </div>
//         );
//     }
// }

// export default graphql(getBookQuery, {
//     options: (props) => {
//         return {
//             variables: {
//                 id: props.bookId
//             }
//         }
//     }
// })(MovieCard);
