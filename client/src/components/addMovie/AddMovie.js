import React, { useState } from 'react'

import { getMoviesQuery } from '../../queries/queries';
import { addMovieMutation } from '../../mutations/mutations';
import { useMutation } from '@apollo/client';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import styles from './styles/AddMovieStyle.module.scss'


const AddMovie = ({ addMovieMutation }) => {

    const [movieInfo, setMovieInfo] = useState({
        name: '',
        genre: '',
        year: ''
    })

    // const [addMovie, { error }] = useMutation(addMovieMutation)
    function addMovieaa(e) {
        e.preventDefault()
        const { name, genre, year } = movieInfo
        addMovieMutation({
            variables: {
                name,
                genre,
                year
            },
            refetchQueries: [{ query: getMoviesQuery }]
        })
        setMovieInfo({
            name: '',
            genre: '',
            year: ''
        })
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

            <form onSubmit={addMovieaa}>
                <div className={styles.field}>
                    <label>Name:</label>
                    <input type='text' name='name'
                        value={movieInfo.name}
                        onChange={handleOnChange} />
                </div>
                <div className={styles.field}>
                    <label>Genre:</label>
                    <input type='text' name='genre'
                        value={movieInfo.genre}
                        onChange={handleOnChange} />
                </div>
                <div className={styles.field}>
                    <label>Year:</label>
                    <input type='number' name='year'
                        value={movieInfo.year}
                        onChange={handleOnChange} />
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

export default compose(
    graphql(getMoviesQuery, { name: "getMoviesQuery" }),
    graphql(addMovieMutation, { name: "addMovieMutation" })
)(AddMovie)
