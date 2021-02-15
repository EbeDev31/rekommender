import React from 'react'
import AddMovie from '../addMovie/AddMovie'
import styles from './styles/MovieAreaStyle.module.scss'
const MovieArea = () => {
    return (
        <div className={styles.MovieArea}>
            <div style={{ flex: .4, backgroundColor: 'white', borderRight: '#9e9e9e 10px solid' }}>
                <AddMovie />
            </div>
            <div style={{ flex: .6, }}>ListArea</div>
        </div>
    )
}

export default MovieArea
