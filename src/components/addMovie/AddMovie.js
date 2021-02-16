import React, { useState } from 'react'
import styles from './styles/AddMovieStyle.module.scss'
const AddMovie = () => {

    const [movieInfo, setMovieInfo] = useState({
        title: '',
        genre: '',
        year: ''
    })

    function addMovie(e) {
        e.preventDefault()
        setMovieInfo({
            title: '',
            genre: '',
            year: ''
        })
        console.log('movie to be added')
    }

    function handleOnChange(e) {
        let input = e.target.name
        let value = e.target.value
        setMovieInfo({
            ...movieInfo,
            [input]: value
        })
    }
    return (
        <div className={styles.addMovie}>

            <form onSubmit={addMovie}>
                <div className={styles.field}>
                    <label>Title:</label>
                    <input type='text' name='title' value={movieInfo.title} onChange={handleOnChange} />
                </div>
                <div className={styles.field}>
                    <label>Genre:</label>
                    <input type='text' name='genre' value={movieInfo.genre} onChange={handleOnChange} />
                </div>
                <div className={styles.field}>
                    <label>Year:</label>
                    <input type='text' name='year' value={movieInfo.year} onChange={handleOnChange} />
                </div>
                <input
                    type='submit'
                    value='Add Movie'
                    style={{
                        marginTop: 5,
                        padding: 10,
                        display: 'flex',
                        backgroundColor: 'cyan',
                        marginLeft: 160
                    }} />
            </form>
        </div>
    )
}

export default AddMovie
