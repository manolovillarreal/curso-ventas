let fileDB = document.getElementById("fileDB");

let listaProductos = [];
let listaCategorias = [];


fileDB.onchange = function() {
    let file = this.files[0];

    let reader = new FileReader();

    reader.onload = function() {
        console.log(reader.result);

        let obj = JSON.parse(reader.result);

        listaProductos = obj.productos;
        listaCategorias = obj.categorias;

        refrescarCategorias();
    }

    reader.readAsText(file);

}


function agregarCategoria(categoria) {
    if (categoria != "") {
        categoria = categoria.toUpperCase();
        if (!listaCategorias.includes(categoria)) {
            listaCategorias.push(categoria);
            listaCategorias.sort();

            let index = listaCategorias.indexOf(categoria);
            return {
                nombre: categoria,
                index
            }
        } else {
            return undefined;
        }
    } else
        return undefined
}

function eliminarCategoria(index) {
    if (index >= 0 && index < listaCategorias.length) {
        listaCategorias.splice(index, 1);
    }
}