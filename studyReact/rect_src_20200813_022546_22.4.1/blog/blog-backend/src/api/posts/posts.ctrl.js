let postId = 1;

const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용'
    }
];

// exports.write = ctx => {
export const write = ctx => {
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = { id: postId, title, body};
    posts.push(post);
    ctx.body = post;
};

// exports.list = ctx => {
export const list = ctx => {
 ctx.body = posts;
};

// exports.read = ctx => {
export const read = ctx => {    
    const { id } = ctx.params;
    const post = posts.find(p => p.id.toString === id);
    if(!post) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        };
        return;
    };
    ctx.body = post;
};

// exports.remove = ctx => {
export const remove = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);

    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        }
        return;
    };

    posts.splice(index, 1);
    ctx.stats = 204;
};

// exports.replace = ctx => {
export const replace = ctx => {    
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);

    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        }
        return;
    };

    posts[index] = {
        id,
        ...ctx.request.body
    };
    ctx.body = posts[index];
};

// exports.update = ctx => {
export const update = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);

    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        }
        return;
    };

    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};
