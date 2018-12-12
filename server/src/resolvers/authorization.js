import { ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { currentUser }, info) => {
  return currentUser
    ? skip
    : new ForbiddenError('You must be logged in to continue.');
};

export const isAdministrator = combineResolvers(
  isAuthenticated,
  (parent, args, { currentUser: { role } }) =>
    role === 'Admin'
      ? skip
      : new ForbiddenError('Not authorized as administrator.')
);

export const isMeetupCreator = combineResolvers(
  isAuthenticated,
  async (
    parent,
    { meetupId },
    { models: { Meetup }, currentUser }
  ) => {
    const meetup = await Meetup.findById(id);

    if (meetup.addedBy !== currentUser.id) {
      throw new ForbiddenError('You must be the meetup\'s creator to continue.');
    }

    return skip;
  }
)

export const isCommentAuthor = combineResolvers(
  isAuthenticated,
  async (
    parent,
    { commentId },
    { models: { Comment }, currentUser }
  ) => {
    const comment = await Comment.findById(commentId);

    if (comment.commentedBy !== currentUser.id) {
      throw new ForbiddenError('You must be the comment author to continue.');
    }

    return skip;
  }
)
