const express = require("express");
const path = require('path');
const hbs = require('hbs')
const app = express();


// const api = 'api.openweathermap.org/data/2.5/weather?q=rajkot&units=metric&appid=c02f7b317c145e68b298758d03da36b7'

const partials_path = path.join(__dirname, '../Templates/partials')
const views = path.join(__dirname, '../Templates/views')
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));
app.set('view engine', 'hbs')
app.set('views', views)
hbs.registerPartials(partials_path)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contect', (req, res) => {
    res.render('contect')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('/contect', (req, res) => {
    res.render('contect')
})
app.get('/*', (req, res)=>{
    res.render('404')
})
app.listen(3000, () => {
    console.log('Server created successfully');
})