    // Express Application
import express from "express";
import msg from './msg.js';

    // Config
const cfg = { port: process.env.PORT || 3000 };

    // Express init
const app = express();

    // home page route
app.get('/', (req,res)=> {
    res.send(msg)
});

    // start server
app.listen(cfg.port, ()=> {
    console.log(`Example app listening on https://localhost:${cfg.port}`)
});
