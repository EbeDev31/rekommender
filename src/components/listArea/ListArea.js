import React from 'react'
import MovieCard from '../movieCard/MovieCard';
import styles from './styles/ListAreaStyle.module.scss'

const ListArea = ({ movies }) => {

    return (
        <div className={styles.listArea}>
            {movies.map((m) => <MovieCard movie={m} />)}
        </div>
    )
}

export default ListArea
