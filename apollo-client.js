import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_APOLLO_END_URL ,
    cache: new InMemoryCache(),
});

export default client;