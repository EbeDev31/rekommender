import React from 'react'
import { FaBeer, FaFolder } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from './styles/MovieCardStyle.module.scss'

import { IconContext } from "react-icons";


const MovieCard = ({ movie, deleteMovie }) => {
    return (
        <div className={styles.movieCard}>
            <div style={{ borderRight: '5px grey solid', marginRight: 10, fontSize: 17 }}>
                Movie Details
                <p> Name : {movie.name}</p>
                <p>Genre : {movie.genre}</p>
                <p>Year : {movie.year}</p>
            </div>
            <div style={{ position: 'relative' }}
                onClick={() => deleteMovie(movie.id)}>
                <div className={styles.icon}><RiDeleteBin6Line size={'3em'} /></div>
                some image
            </div>
        </div>
    )
}

export default MovieCard