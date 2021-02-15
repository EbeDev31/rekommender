import React from 'react'
import styles from './styles/MovieAreaStyle.module.scss'
const MovieArea = () => {
    return (
        <div className={styles.MovieArea}>
            <div style={{ flex: 1, backgroundColor: 'red' }}>AddArea</div>
            <div style={{ flex: 1, backgroundColor: 'blue' }}>ListArea</div>
        </div>
    )
}

export default MovieArea
