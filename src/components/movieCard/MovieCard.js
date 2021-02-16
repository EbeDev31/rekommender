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
