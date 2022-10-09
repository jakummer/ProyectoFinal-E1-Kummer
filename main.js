
import express from 'express';
import db from "./db.js";
import productoRouter from "./routes/producto.js";
import carritoRouter from "./routes/carrito.js"
import handlebars from "express-handlebars";
//const  Router from 'express';
//import productoRouter from "./routes/producto.js";



const app = express();

const hbs = handlebars.engine({
  extname: "hbs",
  layoutsDir: "./views/layouts/",
});

app.engine("hbs", hbs);
app.set("view engine", "hbs");

const DB = new db("data");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(productoRouter);
app.use(carritoRouter);



//el servidor funciona en el puerto 
//httpServer.listen(8080, () => console.log('Servidor corriendo en localhost:8080'))
app.listen(8080, () => console.log('Servidor corriendo en localhost:8080'))

