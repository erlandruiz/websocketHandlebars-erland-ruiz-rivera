


console.log('Este es el script de REALTIMEPRODUCTS')



const socket = io() //FRONTEND
socket.on("nuevoProducto", producto=>{
    let ulProductos = document.querySelector('ul');
    let liNuevoProducto = document.createElement('li');
    liNuevoProducto.innerHTML = producto;
    ulProductos.append(liNuevoProducto)
    
   
})
socket.on("deleteProducto", borrar=>{
    const lista1 = document.getElementById("lista1")

    let li = Array.from(document.getElementsByTagName('li'))
    console.log (li);
    console.log(li.length)
    let ultimo = li[li.length-1];
    console.log(ultimo)
    lista1.removeChild(ultimo)


 
   
    
   
})



