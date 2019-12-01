import mongoose from "mongoose";
import { databaseUrl } from "../config/environment";

const ConnectionErrorException = (error) => {
    this.message = error;
    this.type = 'ConnectionErrorException';
}

module.exports = { 
    
    connectToDB() {
        mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

        mongoose.connection.on('error', error => {
            throw new ConnectionErrorException(error);
        });
    }
}
