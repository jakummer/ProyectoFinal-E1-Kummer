//const fs = require("fs");
import fs from 'fs';


class baseDeDatos {
  // * solo se invoca cuando se crea instancia

  constructor(archivo) {
    this.archivo = archivo;
  }

  //rutinas para Producto
  //cargar producto
  async createProduct(objProduct) {
    const data = await fs.promises.readFile(
      `${this.archivo}/productos.json`,
      "utf-8"
    );
    const productos = JSON.parse(data);
    const id = productos.length + 1;
    objProduct.id = id;
    console.log(objProduct);
    productos.push(objProduct);
    const productosString = JSON.stringify(productos);
    await fs.promises.writeFile(
      `${this.archivo}/productos.json`, productosString);

    return productos;
  }


  //* obtener todos los productos
  async getAllProducts() {
    try {
      const data = await fs.promises.readFile(
        `${this.archivo}/productos.json`,
        "utf-8"
      );
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }


  //* obtener producto por id
  async getProductById(id) {
    try {
      const data = await fs.promises.readFile(
        `${this.archivo}/productos.json`,
        "utf-8"
      );
      const productos = JSON.parse(data);
      const producto = productos.find(producto => producto.id === id);
      
      if (producto){
        //return JSON.parse(producto);
        return (producto);
      }else{
        throw new Error("Producto Inexistente");
      }
      
    } catch (error) {
      return [];
    }
  }


   //* eliminar producto por id
   async deleteProductById(id) {
    try {
      const data = await fs.promises.readFile(
        `${this.archivo}/productos.json`,
        "utf-8"
      );
      const productos = JSON.parse(data);
      const productoIndex = productos.findIndex(producto => producto.id === id);
 
      if (productoIndex!= -1){
        productos.splice(productoIndex, 1);
        const stringProductos = JSON.stringify(productos);
        await fs.promises.writeFile(
          `${this.archivo}/productos.json`, stringProductos );
          
        return productos;

      }else{
        throw new Error("Producto Inexistente");
      }
      
    } catch (error) {
      return [];
    }
  }



//actualizar producto por id
async updateProductById(objProduct) {
      const data = await fs.promises.readFile(
        `${this.archivo}/productos.json`,
        "utf-8"
      );
      const productos = JSON.parse(data);
      const productoIndex = productos.findIndex(producto => producto.id === objProduct.id);

      
      
    console.log(objProduct.id);
      productos[productoIndex].id = objProduct.id;
      productos[productoIndex].nombre = objProduct.nombre;
      productos[productoIndex].descripcion = objProduct.descripcion;
      productos[productoIndex].precio = objProduct.precio;
      productos[productoIndex].urlfoto = objProduct.urlfoto;
      productos[productoIndex].stock = objProduct.strock;

    
      const productosString = JSON.stringify(productos);
      await fs.promises.writeFile(
        `${this.archivo}/productos.json`, productosString);

      return productos;
    }


  //////////////////////////////////////////////////////////////////////////////////////////////
  //rutinas para Carrito
  //crear carrito
  async createCart(objCart) {
    const data = await fs.promises.readFile(
      `${this.archivo}/carrito.json`,
      "utf-8"
    );
    console.log(objCart);
    const carrito = JSON.parse(data);
    const id = carrito.length + 1;
    objCart.id = id;

    console.log(objCart);
    carrito.push(objCart);
    const carritoString = JSON.stringify(carrito);
    await fs.promises.writeFile(
      `${this.archivo}/carrito.json`, carritoString);

    return carrito;
  }


   //* eliminar carrito por id
   async deleteCartById(id) {
    try {
      const data = await fs.promises.readFile(
        `${this.archivo}/carrito.json`,
        "utf-8"
      );
      const carrito = JSON.parse(data);
      const carritoIndex = carrito.findIndex(carrito => carrito.id === id);
 
      if (carritoIndex!= -1){
        carrito.splice(carritoIndex, 1);
        const stringCarrito = JSON.stringify(carrito);
        await fs.promises.writeFile(
          `${this.archivo}/productos.json`, stringCarrito );
          
        return carrito;

      }else{
        throw new Error("Carrito Inexistente");
      }
      
    } catch (error) {
      return [];
    }
  }



  //* obtener todos los productos por el id de carrito
  async getProductsByCartId(id) {
    try {
      const data = await fs.promises.readFile(
        `${this.archivo}/carrito.json`,
        "utf-8"
      );
      const carrito = JSON.parse(data);
      const productos = carrito.find(carrito => carrito.id === id);
      console.log(productos);
      if (productos){
        //return JSON.parse(producto);
        return (productos);
      }else{
        throw new Error("Producto Inexistente");
      }
      
    } catch (error) {
      return [];
    }
  }



}









async function start() {
  const db = new baseDeDatos("data");
  await db.createUser({ nombre: "Javier", correo: "jakummer@gmail.com" });

}
//module.exports = baseDeDatos;

export default baseDeDatos;