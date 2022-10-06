import express from 'express';
import db from "../db.js";
const { Router } = express.Router;

const DB = new db("data");
const routerCarrito = express.Router();

//GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id 
//(disponible para usuarios y administradores)
// routerProducto.get("/api/carrito", async (req, res) =>{
//    const productos = await DB.getAllProducts();
//    //res.render("main", { layout: "altaproductos", productos });
//   res.send(productos);
// });

//mostrar todos los productos de un carrito
routerCarrito.get("/api/carrito/:id/productos", async (req, res) =>{
  const { id } = req.params;
  const carrito = await DB.getProductsByCartId(id);
  //res.render("main", { layout: "altaproductos", productos });
  res.send(carrito);

});


//borra un carrito por su id (disponible para clientes)
routerCarrito.delete("/api/carrito/:id", async (req, res) =>{
  const { id } = req.params;
  const carrito = await DB.deleteCartById(id);
 // res.render("main", { layout: "altaproductos", productos });
 res.send(carrito);
});


//borra un carrito por su id (disponible para clientes)
routerCarrito.delete("/api/carrito/:id/productos/:id_prod", async (req, res) =>{
    const { id } = req.params;
    const carrito = await DB.deleteProductCartById(id);
   // res.render("main", { layout: "altaproductos", productos });
   res.send(carrito);
  });



//para crear carrito
routerCarrito.post("/api/carrito", async (req, res) =>{
  //const { nombre, precio, urlimagen } = req.body;
  const body =   { id: "1",
  timestamp: "1664797135063",
  producto:{
      id:"1",
      timestamp:"1664797135063",
      nombre:"GUITARRA CLASICA VALENCIA DE ESTUDIO TAMAÑO MINI (22) C102 COLOR NATURAL",
      descripcion:"Origen China - Cuerdas 6 - Tipo Equalizador: No - Corte: No - Mano: Diestro - Accesorio Incluido: No",
      codigo:"1",
      urlfoto:"../assets/images/guitarra-clasica-valencia-de-estudio-tamano-mini-22-vc102-color-natural.jpg",
      precio:"20.748"
  }};

  console.log(body);
 const data = await DB.createCart(body);
 //return res.redirect("/altaproductos");
  
});


//para agregar productos al carrito
routerCarrito.post("/api/carrito/:id/productos", async (req, res) =>{
    //const { nombre, precio, urlimagen } = req.body;
   
   const body =   { timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
   descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
   precio : "180.521",
   urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
   stock : "14"};
  
  
   const data = await DB.addCarrito(body);
   //return res.redirect("/altaproductos");
    
  });


// //c. PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
// routerProducto.put("/api/carrito/:id", async (req, res) =>{
//   const body =   { id: "13", timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
//  descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
//  precio : "350.000",
//  urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
//  stock : "12"};


//  const data = await DB.updateCarritoById(body);
//  res.send( );
// });

export default routerCarrito;