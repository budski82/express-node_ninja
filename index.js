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
let food = ['banana', 'apple', 'cookie']
app.get('/boo/', (req,res)=> {
    res.send(`I ate a ${food[1]}`);
});

    // start server
app.listen(cfg.port, ()=> {
    console.log(`Example app listening on https://localhost:${cfg.port}`)
});
