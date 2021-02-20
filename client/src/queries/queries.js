// import { gql } from '@apollo/client'

import { gql } from 'apollo-boost';

const getMoviesQuery = gql`
    {
        movies {
            name
            genre
            year
            id
        }
    }
`;

export { getMoviesQuery };
