//Se trabaja con ESC 6 utilizando import y export

import express, { urlencoded } from "express";


import { router as routerProducts } from "./routes/products.router.js";
import { router as routerCarts} from "./routes/carts.router.js";



import { join } from "path";//Utilizamos el path para poder trabajar con rutas absolutas
import __dirname from "./utils.js"; //importo para crear una ruta absoluta de la carpeta public


import { engine } from 'express-handlebars'; //para usar handlebars
import { router  as vistasRouter} from "./routes/vistas.router.js";


import {Server} from 'socket.io' //Importando socket io para trabajar con websockets

//************************ //
//Limpiamos la consola
console.clear();
//************************ //

const PORT = 8080;

const app = express();




app.use(express.json());
app.use(urlencoded({ extended: true }));// Colocamos la siguiente linea de comandos para que el servidor pueda interpretar datos complejos

let archivoViews = join(__dirname,"./views");

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', archivoViews);

let archivoPublic = join(__dirname, "/public")
app.use(express.static(archivoPublic)) //http://localhost:8080/assets/img/producto.jpg





    app.use("/api/products", routerProducts);// Lo que llega a api/products me lo atienda productsRouter//
    app.use("/api/carts", routerCarts); // Lo que llega a api/carts me lo atienda cartsRouter//

    app.use("/", vistasRouter)
   

 

    const server = app.listen(PORT, () => {
      console.log(`Server on line en puerto ${PORT}`);
    });



  export const io = new Server(server)// Da inicio a socket.io BACKEND
 io.on("connection", socket=>{
  console.log(`se conecto un cliente con id ${socket.id}`);

 })

   
   
   
