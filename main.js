//#region  HOME
let panelHome = document.getElementById('panelHome');
let PanelProductos = document.getElementById('panelProductos');
let panelVentas = document.getElementById('panelVentas');
let panelCategorias = document.getElementById('panelCategorias');

let botonesAtras = document.getElementsByClassName("btnAtras")

for (const btn of botonesAtras) {
    btn.addEventListener("click", mostrarPanelHome);
    //btn.addEventListener("dbclick", () => { alert("Esto no hace nada";) });
}

function mostrarPanelProductos() {
    panelHome.style.display = "none";
    PanelProductos.style.display = "block";
}

function mostrarPanelVentas() {
    panelHome.style.display = "none";
    panelVentas.style.display = "block";
}

function mostrarPanelCategorias() {
    panelHome.style.display = "none";
    panelCategorias.style.display = "block";
}

function mostrarPanelHome() {
    PanelProductos.style.display = "none";
    panelVentas.style.display = "none";
    panelCategorias.style.display = "none";

    panelHome.style.display = "block";
}
//#endregion

//#region Categorias
let txtCategoria = document.getElementById("txtCategoria");
let btnGuardarCategoria = document.getElementById("btnGuardarCategoria");
let contenedorCategorias = document.getElementById("listaCategorias");
let selectCategorias = document.getElementById("selectCategoria");
btnGuardarCategoria.addEventListener("click", guardarCategoria);
txtCategoria.addEventListener("keydown", onKeyDownTxtCategoria);



function onKeyDownTxtCategoria(e) {
    if (e.keyCode == 13) {
        guardarCategoria();
        txtCategoria.value = "";
    }
}

function guardarCategoria() {
    let categoria = agregarCategoria(txtCategoria.value)
    if (categoria) {
        refrescarCategorias();
    }
}

function onClickBtnEliminarCategoria() {
    eliminarCategoria(this.parentElement.id);
    refrescarCategorias();

}

function refrescarCategorias() {
    contenedorCategorias.innerHTML = ""
    selectCategoria.innerHTML = "<option  >Sin Categoria </option>";
    for (let i = 0; i < listaCategorias.length; i++) {
        let elemento = document.createElement('div');
        elemento.setAttribute("id", i);
        elemento.setAttribute("class", "categoria");
        elemento.innerHTML = "<span>" + listaCategorias[i] + "</span>";


        let btnBorrar = document.createElement("button");
        btnBorrar.addEventListener("click", onClickBtnEliminarCategoria)
        btnBorrar.innerHTML = "Eliminar";
        elemento.append(btnBorrar);

        contenedorCategorias.append(elemento);
        selectCategoria.innerHTML += "<option>" + listaCategorias[i] + "</option>";

    }

}
//#endregion