import React from 'react'
import AddMovie from '../addMovie/AddMovie'
import ListArea from '../listArea/ListArea'
import styles from './styles/MovieAreaStyle.module.scss'

const MovieArea = () => {

    let movies = [
        { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
        { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
        { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
        { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
        { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
        { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
    ];

    return (
        <div className={styles.MovieArea}>
            <div style={{ flex: .4, backgroundColor: 'white', borderRight: '#9e9e9e 10px solid' }}>
                <AddMovie />
            </div>
            <div style={{ flex: .6, overflow: 'auto' }}>
                <ListArea movies={movies} />
            </div>
        </div>
    )
}

export default MovieArea
