const graphql = require('graphql')
const Movie = require('../models/movie')
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        year: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        movie: {
            type: MovieType,
            args: { name: { type: GraphQLString } },
            resolve(parent, args) {
                return Movie.find({ name: args.name })
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parents, args) {
                return Movie.find({})
            }
        },
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMovie: {
            type: MovieType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                year: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let movie = new Movie({
                    name: args.name,
                    genre: args.genre,
                    year: args.year
                })
                return movie.save()
            }
        },
        deleteMovie: {
            type: MovieType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Movie.remove({ _id: args.id })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
