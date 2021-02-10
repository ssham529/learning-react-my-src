// const Router = require('koa-router');
import Router from 'koa-router';
// const postsCtrl = require('./posts.ctrl');
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

// const printInfo = ctx => {
//     ctx.body = {
//         method: ctx.method,
//         path: ctx.path,
//         params: ctx.params,
//     };
// };

// posts.get('/', printInfo);
// posts.post('/', printInfo);
// posts.get('/:id', printInfo);
// posts.delete('/:id', printInfo);
// posts.put('/:id', printInfo);
// posts.patch('/:id', printInfo);

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

// posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
// posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
// // posts.put('/:id', postsCtrl.replace);
// posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.remove);
post.patch('/', postsCtrl.update);
posts.use('/:id', postsCtrl.checkObjectId, post.routes());

// module.exports = posts;
export default posts;