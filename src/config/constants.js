require('dotenv').config();

export const constants = {
  PORT: process.env.PORT || 3000,
  DB_URL: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_ATLAS_PW}@message-app-v2tp9.mongodb.net/test?retryWrites=true`,
  GRAPHQL_PATH: '/graphql'
}

export const settings = {
  promiseLibrary: global.Promise,
  useNewUrlParser: true
}