import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import { constants } from './config/constants'
import serverStatus from './utils/serverStatus'
import mocks from './mocks'
import "./config/db";

const app = express();

mongoose.set('debug', true)

// GraphQL: Schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const listening = `App listening on: ${constants.PORT}`;

server.applyMiddleware({ app });

mocks().then(() => app.listen(constants.PORT, err => serverStatus(err, listening)))

