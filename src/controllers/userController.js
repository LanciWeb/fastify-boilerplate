const User = require('../models/User');

module.exports = {
  fetch: async (request, reply) => {
    try {
      const users = await User.find({});
      reply.code(200).send(users);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  get: async (request, reply) => {
    try {
      const user = await User.findById(request.params.id);
      reply.send(user);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  create: async (request, reply) => {
    try {
      const user = request.body;
      const newUser = await User.create(user);
      reply.code(201).send(newUser);
    } catch (e) {
      reply.send(e);
    }
  },

  delete: async (request, reply) => {
    try {
      await User.findByIdAndDelete(request.params.id);
      reply.code(204).send(reply.statusCode);
    } catch (e) {
      reply.send(e);
    }
  },

  edit: async (request, reply) => {
    try {
      const userId = request.params.id;
      const user = await User.findByIdAndUpdate(userId, request.body);
      reply.code(204);
    } catch (e) {
      reply.send(e);
    }
  },
};
