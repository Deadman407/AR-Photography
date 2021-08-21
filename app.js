const express = require("express");
const path = require("path");
const app = express();
const pug = require("pug");
const favicon = require("serve-favicon");
const port = process.env.PORT || 3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.static(path.join(__dirname, 'static')));
app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(express.json());
app.use(express.urlencoded());

// PUB SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, "views")); // Set the views directory

//ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/about', (req, res) => {
    const params = {}
    res.status(200).render('about.pug', params);
})

app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on ${port}`);
})
