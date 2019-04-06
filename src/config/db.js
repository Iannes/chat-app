/* eslint-disable no-console */
import mongoose from 'mongoose';
import { constants, settings } from './constants';

mongoose.set('debug', true); // debug mode on

mongoose
  .connect(constants.DB_URL, settings)
  .then(() => console.log("Connected to Atlas"))
  .catch((err) => console.log("Not Connected to Database ERROR! ", err));


mongoose
  .connection
  .once('open',() => console.log('MongoDB Running'))
  .on('error', error => console.log(error));

