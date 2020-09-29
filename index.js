const fastify = require('fastify');
const app = fastify();
const mongoose = require('mongoose');

const mongoUrl =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/fastify_users';
/** connect to MongoDB datastore */
try {
  mongoose.connect(mongoUrl);
} catch (error) {
  console.error(error);
}

app.get('/', (request, reply) => {
  reply.send('Our first route');
});

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
