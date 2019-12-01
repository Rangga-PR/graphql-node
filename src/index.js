import express from "express";

const server = async () => {
    const app = express();
    app.get('/', (req, res) => res.send("hello from express") );

    app.listen(3001);
}

server();
