
import React from 'react'
import { graphql } from 'react-apollo';
import { getMoviesQuery } from '../../queries/queries';
import MovieCard from '../movieCard/MovieCard';

import styles from './styles/ListAreaStyle.module.scss'

const ListArea = (props) => {

    const { movies, loading } = props.data

    return (
        <div className={styles.listArea}>
            {
                loading &&
                <div>
                    We are stil Loading......................
                </div>
            }
            {
                !loading && movies &&
                movies.map((m) => <MovieCard key={m.id} movie={m} />)
            }
        </div>
    )
}

export default graphql(getMoviesQuery)(ListArea)


