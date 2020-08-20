const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

//Le pregunta al ambiente el puerto si no asigna el 3000
const port=process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'))

//Se configura hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
  res.render('home',{
    nombre:'Diego Gomez Web Site',
    anio:new Date().getFullYear()
  })
})

app.get('/about', (req, res) =>{
  res.render('about',{
    anio:new Date().getFullYear()
  })
})

app.listen(port,()=>{
  console.log(`Escuchando en el puerto ${port}`)
})