import express from "express";
import { connectToDB } from "../config/database";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

const server = async () => {
    const app = express();
    const GraphqlServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    await connectToDB();
    GraphqlServer.applyMiddleware({ app });
    app.listen(3001);
}

server();
