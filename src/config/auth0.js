const { domain, client_id, client_secret } = require('./keys').auth0;

module.exports = {
  domain,
  client_id,
  client_secret,
  //optional
  transformer: async function (credentials) {
    credentials.log_in_date = new Date();
    credentials.marco = 'lanci';
    return credentials;
  },
  // optional
  success: async function (credentials) {
    console.log(
      `${credentials.given_name} logged in at ${credentials.log_in_date} marco: ${credentials.marco}`
    );
  },
};
