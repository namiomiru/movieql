import {
    GraphQLServer
} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

const options = {
    port: 9000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
}

server.start(options, ({
    port
}) => console.log(`Graphql Server Running ${port}`));