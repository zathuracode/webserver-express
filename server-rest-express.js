const express = require('express')
const app = express()

const port=3000;

const peticiones=(req, res) =>{
  let salida={
    nombre:'Diego Gomez',
    edad:32,
    url:req.url,
    method:req.method
  }
  res.send(salida)
}
 
app.get('/', peticiones)

app.post('/', peticiones)
 
app.listen(port,()=>{
  console.log(`Escuchando en el puerto ${port}`)
})