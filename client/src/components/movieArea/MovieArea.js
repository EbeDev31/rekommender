import React from 'react'
import AddMovie from '../addMovie/AddMovie'
import ListArea from '../listArea/ListArea'
import styles from './styles/MovieAreaStyle.module.scss'

const MovieArea = () => {

    return (
        <div className={styles.MovieArea}>
            <div style={{ flex: .4, backgroundColor: 'white', borderRight: '#9e9e9e 10px solid' }}>
                <AddMovie />
            </div>
            <div style={{ flex: .6, overflow: 'auto' }}>
                <ListArea />
            </div>
        </div>
    )
}

export default MovieArea
