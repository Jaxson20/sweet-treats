const { User, ChristmasOrder } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      return await User.findById(context.user._id);
    }
  },
  Mutation: {
    signin: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.verifyPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token };
    },
    createChristmasOrder: async (parent, {firstName, lastName, email, phoneNumber, numberOfBoxes, specialMessage }) => {
      try {
        const newChristmasOrder = new ChristmasOrder({
          firstName,
          lastName,
          email,
          phoneNumber,
          numberOfBoxes,
          specialMessage, 
        });
        const savedChristmasOrder = await newChristmasOrder.save();

        return savedChristmasOrder;
      } catch (error) {
        console.error('Error creating Christmas order:', error);
        throw new Error('Failed to create Christmas order');
      }
    }
  }
};

module.exports = resolvers;
