const fastify = require('fastify');
const mongoose = require('mongoose');
const auth0 = require('fastify-auth0');
const fastifyCookie = require('fastify-cookie');
const fastifyCashing = require('fastify-caching');
const auth0Config = require('./src/config/auth0');
const userRoutes = require('./src/routes/userRoutes');
const serverSession = require('fastify-server-session');
const mongoUrl = 'mongodb://localhost:27017/fastify_users';
const serverConfig = require('./src/config/server_session');
const app = fastify();
/** connect to MongoDB datastore */
try {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.error(error);
}
app.register(fastifyCookie);
app.register(fastifyCashing);
app.register(serverSession, serverConfig);
app.register(auth0, auth0Config);

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
