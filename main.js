
const express = require('express');
// const db = require("./db.js");
// const { Router } = express
import productoRouter from "./routes/producto.js";
//const productoRouter = require("./routes/producto.js");

const app = express();

// const DB = new db("data");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(productoRouter);

// // router.get('/recurso, (req, res) => {
// //    res.send('get ok')
// // })


// //GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id 
// //(disponible para usuarios y administradores)
// app.get("/productos", async (req, res) =>{
//     const productos = await DB.getAllProducts();
//     //res.render("main", { layout: "altaproductos", productos });
//    res.send(productos);
// });


// app.get("/productos/:id", async (req, res) =>{
//    const { id } = req.params;
//    const producto = await DB.getProductById(id);
//    //res.render("main", { layout: "altaproductos", productos });
//    res.send(producto);

// });


// //d. DELETE: '/:id' - Borra un producto por su id (disponible para administradores
// app.delete("/productos/:id", async (req, res) =>{
//    const { id } = req.params;
//    const producto = await DB.deleteProductById(id);
//   // res.render("main", { layout: "altaproductos", productos });
//   res.send(producto);
// });


// //b. POST: '/' - Para incorporar productos al listado (disponible para administradores)
// app.post("/productos/", async (req, res) =>{
//    //const { nombre, precio, urlimagen } = req.body;
//    const body =   { timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
//   descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
//   precio : "180.521",
//   urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
//   stock : "12"};


//   const data = await DB.createProduct(body);
//   //return res.redirect("/altaproductos");
   
// });


// //c. PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
// app.put("/productos/:id", async (req, res) =>{
//    const body =   { id: 11, timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
//   descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
//   precio : "250.000",
//   urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
//   stock : "12"};


//   const data = await DB.updateProductById(body);
//   res.send( );
// });





//el servidor funciona en el puerto 
//httpServer.listen(8080, () => console.log('Servidor corriendo en localhost:8080'))
app.listen(8080, () => console.log('Servidor corriendo en localhost:8080'))

