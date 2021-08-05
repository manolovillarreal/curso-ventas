let listaCategorias = [];

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

function editarCategoria(categoria) {

}

function eliminarCategoria(categoria) {

}