
import React from 'react'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import { getMoviesQuery } from '../../queries/queries';
import { deleteMovieMutation } from '../../mutations/mutations';
import MovieCard from '../movieCard/MovieCard';

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
                <h1 className={styles.title}>{movies.length} Movies in Total</h1>
            }

            {
                loading &&
                <div>
                    We are stil Loading......................
                </div>
            }

            <div className={styles.list}>
                {
                    !loading && movies &&
                    movies.map((m) => <MovieCard deleteMovie={deleteMovie} key={m.id} movie={m} />)
                }
            </div>
        </div>
    )
}

export default compose(
    graphql(getMoviesQuery, { name: "moviesQuery" }),
    graphql(deleteMovieMutation, { name: "deleteMovieMutation" })
)(ListArea)


