const fastify = require('fastify');
const app = fastify();

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
