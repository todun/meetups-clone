import { mergeTypes } from 'merge-graphql-schemas';

import meetupTypes from './meetup';
import cityTypes from './city';
import userTypes from './user';

const types = [
  meetupTypes,
  cityTypes,
  userTypes,
];

export default mergeTypes(types, { all: true });
