const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setuWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setuWebsocket(server);

mongoose.connect('mongodb+srv://derik:derik@cluster0-mx9gh.mongodb.net/week10retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
