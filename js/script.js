
  AOS.init( {
   duration:900 
  })

  $(function(){
    var tarjetas = $(".platotar");
    var nombre = $(".info a");
    var total = tarjetas.length;
    var actual = 0;

    if (total === 0) return;

    function mostrar(n) {
        actual = (n + total) % total;
        var prev = (actual - 1 + total) % total;
        var next = (actual + 1) % total;
    

        tarjetas.removeClass("activo izq der");
        tarjetas.eq(actual).addClass("activo");
        tarjetas.eq(prev).addClass("izq");
        tarjetas.eq(next).addClass("der");

     nombre.text(tarjetas.eq(actual).data("nombre"));
    }

    $(".flechder").on("click", function () {
        mostrar(actual + 1);
    });

    $(".flechizq").on("click", function () {
        mostrar(actual -  1);
    });
    mostrar(0);

});

if (window.feather) feather.replace();

var hamburguesa = document.querySelector(".hamburger");
var menu = document.querySelector("#menu");
var cerrar = document.querySelector(".menuhbg-cerrar");

if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", function () {
        menu.classList.toggle("active");
    })
}
if (cerrar && menu) {
    cerrar.addEventListener("click", function () {
        menu.classList.remove("active")
    })
}

document.querySelectorAll("menuhbg a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("active")
    })
})

var platos = [
    { nombre: "Ramen Cerdo",   categoria: "Ramen",     imagen: "img/tarjram1.png", precio: "12.50€", descripcion: "Caldo de cerdo con fideos, huevo y cebolleta." },
    { nombre: "Gyozas",        categoria: "Entrantes", imagen: "img/tarjap1.png",  precio: "4.50€",  descripcion: "Empanadillas japonesas a la plancha."},
    { nombre: "Takoyaki",      categoria: "Entrantes", imagen: "img/tarjap2.png",  precio: "3.90€",  descripcion: "Bolitas de pulpo con salsa especial." },
    { nombre: "Salmón",        categoria: "Entrantes", imagen: "img/tarjap3.png",  precio: "5.10€" },
    { nombre: "Onigiri",       categoria: "Entrantes", imagen: "img/tarjap4.png",  precio: "5.50€" },
    { nombre: "Ramen Marisco", categoria: "Ramen",     imagen: "img/tarjram2.png", precio: "13.50€" },
    { nombre: "Ramen Ternera", categoria: "Ramen",     imagen: "img/tarjram3.png", precio: "13.00€" },
    { nombre: "Ramen Pollo",   categoria: "Ramen",     imagen: "img/tarjram4.png", precio: "11.50€" },
    { nombre: "Sake",          categoria: "Bebidas",   imagen: "img/tarjbeb1.png", precio: "5.00€" },
    { nombre: "Cerveza",       categoria: "Bebidas",   imagen: "img/tarjbeb2.png",  precio: "3.50€" },
    { nombre: "Refrescos",     categoria: "Bebidas",   imagen: "img/tarjbeb3.png", precio: "2.50€" },
    { nombre: "Agua",          categoria: "Bebidas",   imagen: "img/tarjbeb4.png", precio: "2.00€" },
    { nombre: "Dorayaki",      categoria: "Postres",   imagen: "img/tarjpos1.png", precio: "4.50€" },
    { nombre: "Dango",         categoria: "Postres",   imagen: "img/tarjpos2.png", precio: "4.00€" },
    { nombre: "Taiyaki",       categoria: "Postres",   imagen: "img/tarjpos4.png", precio: "4.90€" },
    { nombre: "Mochi",         categoria: "Postres",   imagen: "img/tarjpos3.png", precio: "4.50€" }
];
var contenedor = document.querySelector("#cards")
var modal = document.querySelector("#modal");
var ultimaTarjeta = null;




