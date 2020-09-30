const {
  serverSession: { secretKey },
} = require('./keys');

module.exports = {
  secretKey,
  sessionMaxAge: 1000 * 60 * 15, // 15 minutes
  cookie: {
    domain: 'localhost',
    path: '/',
    expires: 1000 * 60 * 15,
    sameSite: 'Lax',
  },
};
