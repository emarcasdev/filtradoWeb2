$(document).ready(function () {
    // declaro los usuarios con un ID único;
    let usuarios = [
        {
            id: 1,
            img: "./multimedia/birham.png",
            nombre: "Birham Fernandez",
            desc: "Alumno de Aulaestudio, desea invadir polonia."
        },
        {
            id: 2,
            img: "./multimedia/ivan.png",
            nombre: "Ivan Alfaya",
            desc: "Alumno de Aulaestudio, le gusta leer cosas de asiaticos."
        },
        {
            id: 3,
            img: "./multimedia/eder.png",
            nombre: "Eder Martinez",
            desc: "Alumno de Aulaestudio, le gusta el furbo."
        },
        {
            id: 4,
            img: "./multimedia/agus.png",
            nombre: "Agustin Alonso",
            desc: "Alumno de Aulaestudio, se denomina así mismo como un druida."
        },
        {
            id: 5,
            img: "./multimedia/pellejero.png",
            nombre: "Daniel Pellejero",
            desc: "Alumno de Aulaestudio, no le gusta la chamba."
        },
        {
            id: 6,
            img: "./multimedia/dani.png",
            nombre: "Daniel Calvar",
            desc: "Alumno de Aulaestudio, es Jesucristo en programción."
        },
        {
            id: 7,
            img: "./multimedia/david.png",
            nombre: "David Priego",
            desc: "Alumno de Aulaestudo, le mola chambear sobre todo en bases de datos."
        },
        {
            id: 8,
            img: "./multimedia/idriss.png",
            nombre: "Idriss El Aziri",
            desc: "Alumno de Aulaestudio, es campeón gallego (solo le ganó a uno)."
        },
        {
            id: 9,
            img: "./multimedia/angel.png",
            nombre: "Ángel Panadero",
            desc: "Alumno de Aulaestudio, presidente de Marlboro."
        },
        {
            id: 10,
            img: "./multimedia/diego.png",
            nombre: "Diego Pérez",
            desc: "Alumno de Aulaestudio, es traficante de objetos (cartas, videojuegos, etc...)."
        },
        {
            id: 11,
            img: "./multimedia/rober.png",
            nombre: "Roberto Castro",
            desc: "Profesor de Aulaestudio, es el ADMIN de la clase."
        }
    ];

    // Función para meter los usuarios dentro del contenedor
    function cargarUsuarios(usuarios) {
        // Vaciar el contenedor de las cartas
        $('.contenedor-cart').empty();
        // Recorrer la lista usuarios
        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            // Añadir cada carta al contenedor de las cartas
            $(".contenedor-cart").append(
                `<div class="card">
                    <img src="${usuario.img}" alt="Usuario">
                    <div class="info">
                        <h2 class="nombre">${usuario.nombre}</h2>
                        <p>${usuario.desc}</p>
                        <div class="botonB"> 
                            <button class="borrar" data-id="${usuario.id}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b0881" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
                        </div>
                    </div>
                </div>`
            );
        }
    }

    // Carga los usuarios cuando carge el HTML
    cargarUsuarios(usuarios);

    // Cuando se haga click al boton de buscar se hara lo siguiente
    $('.boton').on('click', function () {
        // obtener lo que se escribe en el input
        const nombreFiltrado = $('.input').val().toLowerCase();
        // filtrar los usuarios que coincidan con el valor del input
        const filtrado = usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(nombreFiltrado));
        // Poner en el contenedor las cartas de los usurios que coincidan
        cargarUsuarios(filtrado);
        // Ocultar el footer
        $('footer').hide();
    });

    // Cuando le den click al boton de borrar se hara lo siguiente
    $('.contenedor-cart').on('click', '.borrar', function () {
        const id = $(this).data('id');
        // Eliminar el usuario del array
        usuarios = usuarios.filter(usuario => usuario.id !== id);
        // Eliminar la carta
        $(this).closest('.card').remove();
        // Ocultar el footer
        $('footer').hide();
    });

    // Cuando le den click al boton de crear se hara lo siguiente
    $('.creacion').on('click', function (event) {
        // Mostrar el footer
        $('footer').show();
        event.preventDefault();
        const imagen = "./multimedia/predet.png";
        const nombre = $("#nombre").val();
        const descripcion = $("#desc").val();

        // Estructura de la nueva carta
        let nuevoUser = {
            id: usuarios.length + 1,
            img: imagen,
            nombre: nombre,
            desc: descripcion
        }
        // Añadimos el usuario al array
        usuarios.push(nuevoUser);
        // Cargamos los usuarios dentro del array
        cargarUsuarios(usuarios);

        // Restablecer el formulario
        $("#creacionUsuarioForm")[0].reset();
        // Cerrar el formulario al hacer click
        $('[data-modal-hide="authentication-modal"]').click();
    })
});