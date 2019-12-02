import { User } from "../models/users";

export const resolvers = {
    Query: {
        helloWorld: () => 'hello world',
        getUsers: (_, args) => User.find(args)
    },
    Mutation: {
        postUser: (_, args) => User.create(args)
    }
};
