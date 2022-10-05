import express from 'express';
import db from "../db.js";
const { Router } = express.Router;

const DB = new db("data");
const routerProducto = express.Router();

//lista todos los productos disponibles (disponible para usuarios y administradores)
routerProducto.get("/api/productos", async (req, res) =>{
   const productos = await DB.getAllProducts();
   //res.render("main", { layout: "altaproductos", productos });
  res.send(productos);
});

//lista productos por id (disponible para usuarios y administradores)
routerProducto.get("/api/productos/:id", async (req, res) =>{
  const { id } = req.params;
  const producto = await DB.getProductById(id);
  //res.render("main", { layout: "altaproductos", productos });
  res.send(producto);

});


//borra un producto por su id (disponible para administradores)
routerProducto.delete("/api/productos/:id", async (req, res) =>{
  const { id } = req.params;
  const producto = await DB.deleteProductById(id);
 // res.render("main", { layout: "altaproductos", productos });
 res.send(producto);
});


//agrega productos al listado (disponible para administradores)
routerProducto.post("/api/productos/", async (req, res) =>{
  //const { nombre, precio, urlimagen } = req.body;
  const body =   { timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
 descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
 precio : "180.521",
 urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
 stock : "14"};


 const data = await DB.createProduct(body);
 //return res.redirect("/altaproductos");
  
});


//actualiza un producto por su id (disponible para administradores)
routerProducto.put("/api/productos/:id", async (req, res) =>{
  const body =   { id: "13", timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
 descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
 precio : "350.000",
 urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
 stock : "12"};


 const data = await DB.updateProductById(body);
 res.send( );
});

export default routerProducto;