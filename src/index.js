import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import { constants } from './config/constants'
import serverStatus from './utils/serverStatus'
import mocks from './mocks'
import auth from './services/auth'
import "./config/db";

const app = express();
mongoose.set('debug', true)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.user
  })
});

server.applyMiddleware({ app, auth });

const listening = `App listening on: ${constants.PORT}`;
mocks().then(() => app.listen(constants.PORT, err => serverStatus(err, listening)))

