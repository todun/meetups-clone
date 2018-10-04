"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = `

type City {
  _id: ID!
  name: String!
  country: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Query {
	allCities: [City!]!
}

type Mutation {
  addCity(name: String!, country: String!): City
}

`;
//# sourceMappingURL=city.js.map