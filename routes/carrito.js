import express from 'express';
import db from "../db.js";
const { Router } = express.Router;

const DB = new db("data");
const routerCarrito = express.Router();



//crea carrito
routerCarrito.post("/api/carrito", async (req, res) =>{
 const timestamp = Date.now();
 const productos= new Array();
 const carrito = await DB.createCart({timestamp, productos});
 //return res.redirect("/altaproductos");
 res.send(carrito);
  
});



//borra un carrito por su id (disponible para clientes)
routerCarrito.delete("/api/carrito/:id", async (req, res) =>{
  const { id } = req.params;
  const carrito = await DB.deleteCartById(id);
 // res.render("main", { layout: "altaproductos", productos });
 res.send(carrito);
});



//mostrar todos los productos de un carrito
routerCarrito.get("/api/carrito/:id/productos", async (req, res) =>{
  const { id } = req.params;
  const productos = await DB.getProductsByCartId(id);
  //res.render("main", { layout: "altaproductos", productos });
  res.send(productos);

});


//para agregar productos al carrito
routerCarrito.post("/api/carrito/:id/productos", async (req, res) =>{
  const timestamp = Date.now();
  const { id, id_prod, nombre, descripcion, precio} = req.body;
   
  const carrito = await DB.addProductToCart(id, {timestamp, id_prod, nombre, descripcion, precio});
   //return res.redirect("/altaproductos");
  res.send(carrito);

  });


//borra un producto del carrito por su id (disponible para clientes)
routerCarrito.delete("/api/carrito/:id/productos/:id_prod", async (req, res) =>{
  const { id, id_prod } = req.params;
  const carrito = await DB.deleteProductCartById(id, id_prod);
 // res.render("main", { layout: "altaproductos", productos });
 res.send(carrito);
});



export default routerCarrito;