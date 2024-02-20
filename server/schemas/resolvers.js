const { User, ChristmasOrder, ValentinesOrder } = require('../models');
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
    createChristmasOrder: async (parent, { firstName, lastName, email, phoneNumber, numberOfBoxes, specialMessage }) => {
      console.log('Resolver function started');
      try {
        console.log('Received args:', firstName, lastName, email, phoneNumber, numberOfBoxes, specialMessage);
        const newChristmasOrder = await ChristmasOrder.create({
          firstName,
          lastName,
          email,
          // phoneNumber: parseInt(phoneNumber),
          numberOfBoxes: parseInt(numberOfBoxes),
          specialMessage,
        });
        console.log('Order created successfully:', newChristmasOrder);
        return newChristmasOrder;
      } catch (error) {
        console.error('Error creating Christmas order:', error);
        throw new Error('Failed to create Christmas order');
      }
    },
    createValentinesOrder: async (parent, { firstName, lastName, email, phoneNumber, numberOfBoxes, specialMessage }) => {
      console.log('Resolver function started');
      try {
        console.log('Received args:', firstName, lastName, email, phoneNumber, numberOfBoxes, specialMessage);
        const newValentinesOrder = await ValentinesOrder.create({
          firstName,
          lastName,
          email,
          // phoneNumber: parseInt(phoneNumber),
          numberOfBoxes: parseInt(numberOfBoxes),
          specialMessage,
        });
        console.log('Order created successfully:', newValentinesOrder);
        return newValentinesOrder;
      } catch (error) {
        console.error('Error creating Valentines order:', error);
        throw new Error('Failed to create Valentines order');
      }
    }
  }
};

module.exports = resolvers;
