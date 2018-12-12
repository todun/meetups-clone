import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({ uri: "/graphql" });

export default httpLink;
