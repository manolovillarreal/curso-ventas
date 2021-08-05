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


//#region Categorias
let txtCategoria = document.getElementById("txtCategoria");
let btnGuardarCategoria = document.getElementById("btnGuardarCategoria");
let contenedorCategorias = document.getElementById("listaCategorias");
btnGuardarCategoria.addEventListener("click", onClickGuardarCategoria)

function onClickGuardarCategoria(e) {

    let categoria = agregarCategoria(txtCategoria.value)
    if (categoria) {
        refrescarCategorias();
    }
}

function onDblClickCategoria(e) {
    console.log(this);

}

function refrescarCategorias() {
    contenedorCategorias.innerHTML = ""
    for (let i = 0; i < listaCategorias.length; i++) {
        let elemento = document.createElement('div');
        elemento.setAttribute("id", i);
        elemento.setAttribute("class", "categoria");
        elemento.innerHTML = listaCategorias[i];
        elemento.addEventListener("dblclick", onDblClickCategoria)
        contenedorCategorias.append(elemento)
    }

}
//#endregion