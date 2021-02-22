
import React from 'react'
import { graphql } from 'react-apollo';
import { getMoviesQuery } from '../../queries/queries';
import { deleteMovieMutation } from '../../mutations/mutations';

import MovieCard from '../movieCard/MovieCard';
import { flowRight as compose } from 'lodash';


import styles from './styles/ListAreaStyle.module.scss'

const ListArea = ({ moviesQuery, deleteMovieMutation }) => {

    const { movies, loading } = moviesQuery

    function deleteMovie(movieId) {
        deleteMovieMutation({
            variables: {
                id: movieId
            },
            refetchQueries: [{ query: getMoviesQuery }]
        })
        console.log('Movie Deleted')
    }

    return (
        <div className={styles.listArea}>

            {
                !loading && movies &&
                <h1 style={{ textAlign: 'center', color: '#343934', borderBottom: '#d67d7d 3px solid', }}>{movies.length} Movies in Total</h1>
            }

            {
                loading &&
                <div>
                    We are stil Loading......................
                </div>
            }
            {
                !loading && movies &&
                movies.map((m) => <MovieCard deleteMovie={deleteMovie} key={m.id} movie={m} />)
            }
        </div>
    )
}

export default compose(
    graphql(getMoviesQuery, { name: "moviesQuery" }),
    graphql(deleteMovieMutation, { name: "deleteMovieMutation" })

)(ListArea)


