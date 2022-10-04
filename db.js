const fs = require("fs");

class baseDeDatos {
  // * solo se invoca cuando se crea instancia

  constructor(archivo) {
    this.archivo = archivo;
  }

 
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
     
      if (userIndex != -1){
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

}

async function start() {
  const db = new baseDeDatos("data");
  await db.createUser({ nombre: "Javier", correo: "jakummer@gmail.com" });

}
module.exports = baseDeDatos;
