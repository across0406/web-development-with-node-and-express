'use strict';

import Express from 'express';
import path from 'path';
import ExpressHandlebars from 'express-handlebars';
import HomeHandler from './lib/handlers/homeHandler.js';
import AboutHandler from './lib/handlers/aboutHandler.js';
import NotFoundHandler from './lib/handlers/notFoundHandler.js';
import ServerErrorHandler from './lib/handlers/serverErrorHandler.js';

const app = Express();
const __dirname = path.resolve();
const port = process.env.port || 12000;

// Set static middle-ware.
app.use(Express.static(__dirname + '/public'));

// Set view engine as handlebars.
app.engine('handlebars', ExpressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// Routing
app.get('/', HomeHandler.go);
app.get('/about', AboutHandler.go);
app.use(NotFoundHandler.go);
app.use(ServerErrorHandler.go);

const server = app.listen(port, () => {
    console.log('server on http://localhost:' + port);
});
