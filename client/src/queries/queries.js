// import { gql } from '@apollo/client'

import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;
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

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;



const addMovieMutation = gql`
    mutation AddMovie($name: String!, $genre: String!, $year: String!){
        addMovie(name: $name, genre: $genre, year: $year){
            name
            genre
            year
        }
    }
`;

const addAuthorMutation = gql`
    mutation ($name: String, $age: Int){
        addAuthor(name: $name, age: $age){
            name
            age
        }
    }
`;


export { getMoviesQuery, addMovieMutation };
