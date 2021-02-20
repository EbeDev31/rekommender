// import { gql } from '@apollo/client'

import { gql } from 'apollo-boost';

const addMovieMutation = gql`
    mutation AddMovie($name: String!, $genre: String!, $year: String!){
        addMovie(name: $name, genre: $genre, year: $year){
            name
            genre
            year
        }
    }
`;

export { addMovieMutation };
