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

function eliminarCategoria(index) {
    if (index >= 0 && index < listaCategorias.length) {
        listaCategorias.splice(index, 1);
    }
}