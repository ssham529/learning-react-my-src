require('dotenv').config();
// const Koa = require('koa');
import Koa from 'koa';
// const Router = require('koa-router');
import Router from 'koa-router';
// const bodyParser = require('koa-bodyparser');
import bodyParser from 'koa-bodyparser';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// const api = require('./api');
import api from './api';
// import createFakeData from './createFakeData';

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
.then(() => {
  console.log('HSS Connected to MongoDB');
  // createFakeData();
})
.catch(e => {
  console.error(e);
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
  console.log('HSS Listening to port %d', port);
});
