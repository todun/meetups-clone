import { HttpLink } from "apollo-boost";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

export default httpLink;
