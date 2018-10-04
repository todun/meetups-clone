'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Query: {
    allMeetups: (parent, args, { Meetup }, info) => fetchMeetups(Meetup),

    meetupsByType: (parent, { type }, { Meetup }, info) => fetchMeetups(Meetup, { name: 'type', value: type }),

    meetupsByLocation: (parent, { location }, { Meetup }, info) => fetchMeetups(Meetup, { name: 'location', value: location }),

    meetupsByTypeAndLocation: (parent, { type, location }, { Meetup }, info) => fetchMeetups(Meetup, {
      name: 'location and type',
      value: [type, location]
    })
  },

  Mutation: {
    createMeetup: async (parent, args, { Meetup, User }, info) => {
      try {
        // Save new meetup
        const newMeetup = await new Meetup(args).save();

        // Update current user's [addedMeetups]
        await User.findByIdAndUpdate(args.addedBy, {
          $push: { addedMeetups: newMeetup._id }
        });

        newMeetup._id = newMeetup._id.toString();

        return newMeetup;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
};


async function fetchMeetups(model, condition) {
  try {
    const meetupsQuery = async () => {
      if (!condition) {
        return model.find();
      }
      if (condition.name === 'type') {
        return model.find({ type: condition.value });
      }
      if (condition.name === 'location') {
        return model.find({
          "location.name": {
            "$eq": condition.value,
            "$exists": true
          }
        });
      }
      if (condition.name === 'location and type') {
        return model.find({ type: condition.value[0] }, { "location.name": condition.value[1] });
      }
    };

    const meetups = await meetupsQuery();

    return meetups.map(meetup => {
      meetup._id = meetup._id.toString();
      return meetup;
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
//# sourceMappingURL=meetup.js.map