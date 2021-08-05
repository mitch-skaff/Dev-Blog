const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    hooks:true
 });

Post.belongsTo(User,{
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    hooks:true
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    hooks:true
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    hooks:true
});


module.exports= { User, Post, Comment }; 