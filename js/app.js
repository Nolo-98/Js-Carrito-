// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

const AgregarCurso = (e) => {
  e.preventDefault()
  if (e.target.classList.conteins('agrrgar-carrito')){
    const id =e.target.getAttribute('data-id');
    const card = e.target.parentElement;
    const infoCard = leerInfor(card);
    
   const existe = elementosCarrito.some(item => item.id ===id);
   if (existe){
    const libros = elementosCarrito.mep(item=>{
        if (item.id ===id) item.cant++;
        return item;
    })
    elementosCarrito = libro; 
   }
    llenaCarrito(elementosCarrito);
  }
}
 const leerInfor = card => {
    const title = card.querySelector('h4').innerText;
    const precio =card.querySelector('.precio span').innerText
    const imagen =card.querySelector('img').src;
    return {
        id : id, 
        name: title,
        price: precio ,
        imagen:imagen,
        cantidad: 1 
    }

 }


const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

const eliminarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}

const vaciarCarrito = () => {
  
    
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

const leerDatosCurso = (curso) => {
    
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
    
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    console.log(articulosCarrito);
    carritoHTML();
}
const carritoHTML = () => {

    vaciarCarrito();

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src='${imagen}' width='100'>
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;
       
        contenedorCarrito.appendChild(row);
    })
}

const cargarEventListener = () => {
  
    listaCursos.addEventListener('click', agregarCurso);
    
    carrito.addEventListener('click', eliminarCurso)
    
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}
cargarEventListener();