import React from 'react'
import styles from './styles/AddMovieStyle.module.scss'
const AddMovie = () => {

    function addMovie() {
        console.log('movie to be added')
    }
    return (
        <div className={styles.addMovie}>
            <form onSubmit={addMovie}>
                <div className={styles.field}>
                    <label>Title:</label>
                    <input type='text' />
                </div>
                <div className={styles.field}>
                    <label>Genre:</label>
                    <input type='text' />
                </div>
                <div className={styles.field}>
                    <label>Year:</label>
                    <input type='text' />
                </div>
                <input type='submit' value='Add Movie' style={{ marginTop: 5, padding: 10, display: 'flex', backgroundColor: 'cyan', marginLeft: 160 }} />

            </form>
        </div>
    )
}

export default AddMovie
