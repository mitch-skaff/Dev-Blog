const userData = require('./userData');
const postData = require('./posts');

const { Post, User, } = require('../models');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  const posts = await Post.bulkCreate(postData);
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();