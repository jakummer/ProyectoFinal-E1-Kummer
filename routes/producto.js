//import express from 'express';
const express = require('express');
//(import db from "../db.js";
const db = require("../db.js");
const { Router } = express

const productoRouter = Router();
const app = express();

const DB = new db("data");

//GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id 
//(disponible para usuarios y administradores)
productoRouter.get("/productos", async (req, res) =>{
    const productos = await DB.getAllProducts();
    //res.render("main", { layout: "altaproductos", productos });
   res.send(productos);
});


productoRouter.get("/productos/:id", async (req, res) =>{
   const { id } = req.params;
   const producto = await DB.getProductById(id);
   //res.render("main", { layout: "altaproductos", productos });
   res.send(producto);

});


//d. DELETE: '/:id' - Borra un producto por su id (disponible para administradores
productoRouter.delete("/productos/:id", async (req, res) =>{
   const { id } = req.params;
   const producto = await DB.deleteProductById(id);
  // res.render("main", { layout: "altaproductos", productos });
  res.send(producto);
});


//b. POST: '/' - Para incorporar productos al listado (disponible para administradores)
productoRouter.post("/productos/", async (req, res) =>{
   //const { nombre, precio, urlimagen } = req.body;
   const body =   { timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
  descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
  precio : "180.521",
  urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
  stock : "12"};


  const data = await DB.createProduct(body);
  //return res.redirect("/altaproductos");
   
});


//c. PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
productoRouter.put("/productos/:id", async (req, res) =>{
   const body =   { id: 11, timestamp: Date.now(), nombre : "SAXO TENOR STAGG LEVANTE EB CON ESTUCHE PARA ESTUDIO",
  descripcion : "Saxo Tenor Stagg levante Eb con estuche para estudio - Origen: China",
  precio : "250.000",
  urlfoto : "../assets/images/saxo-alto-stagg-levante-eb-con-estuche-para-estudio.jpg",
  stock : "12"};


  const data = await DB.updateProductById(body);
  res.send( );
});

//export default productoRouter;