import express from 'express';
import db from "../db.js";
const { Router } = express.Router;

const DB = new db("data");
const routerProducto = express.Router();

//lista todos los productos disponibles (disponible para usuarios y administradores)
routerProducto.get("/productos", async (req, res) =>{
   const productos = await DB.getAllProducts();
   //res.render("main", { layout: "productos", productos });
  res.send(productos);
});


//agrega productos al listado (disponible para administradores)
routerProducto.post("/api/productos", async (req, res) =>{
  const timestamp = Date.now();
  const { id, nombre, descripcion, precio, stock, urlfoto } = req.body;

 const producto = await DB.createProduct({ timestamp, id, nombre, descripcion, precio, stock, urlfoto });
 //return res.redirect("/productos");
 res.send(producto);
  
});


//borra un producto por su id (disponible para administradores)
routerProducto.delete("/api/productos/:id", async (req, res) =>{
  const { id } = req.params;
  const producto = await DB.deleteProductById(id);
  //res.render("main", { layout: "altaproductos", productos });
 res.send(producto);
});



//lista producto por id(disponible para usuarios y administradores)
routerProducto.get("/api/productos/:id", async (req, res) =>{
  const { id } = req.params;
  const producto = await DB.getProductById(id);
  //res.render("main", { layout: "altaproductos", productos });
  console.log(producto);
  res.send(producto);

});


//actualiza un producto por su id (disponible para administradores)
routerProducto.put("/api/productos/:id", async (req, res) =>{
  const timestamp = Date.now();
  const { id, nombre, descripcion, precio, stock, urlfoto } = req.body;

  const producto = await DB.updateProductById({ timestamp, id, nombre, descripcion, precio, stock, urlfoto });
  res.send(producto);
});

export default routerProducto;