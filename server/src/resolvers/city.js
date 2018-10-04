export default {
  Query: {
    allCities: async (parent, args, { City }, info) => {
      try {
        //...
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    addCity: async (parent, args, { City }, info) => {
      try {
        //...
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};
