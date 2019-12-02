import { User } from "../models/users";

export const resolvers = {
    Query: {
        helloWorld: () => 'hello world',
        getUsers: () => User.find()
    },
    Mutation: {
        postUser: (_, args) => User.create(args)
    }
};
