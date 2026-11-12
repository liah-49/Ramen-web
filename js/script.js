// var items = document.querySelectorAll('.carrusel, .item');
// var total = items.length;
// var info =  document.querySelector('.carrusel, .info');
// var titulo = info.querySelector('h3, a');
// var desc = info.querySelector('p'); 
// var actual= 1;

// function render() {
//     items.forEach(function(item) {
//         item.classList.remove('activo', 'prev', 'next');
//     })
//     items[actual].classList.add('activo');
//     items[(actual - 1 + total) % total].classList.add('prev');
//     items[(actual + 1) % total].classList.add('next');
// }
// var a = items[actual];
// info.classList.add('oculto');
// setTimeout(function() {
//     titulo.textContent = a.dataset.nombre;
//     titulo.href = a.dataset.enlace;
//     desc.textContent = a.dataset.desc;
//     info.classList.remove('oculto');
// })
// document.querySelector('.flechder').addEventListener('click', function () {
//     actual = (actual + 1) % total;
//     render();
// });

// document.querySelector('.flechizq').addEventListener('click', function () {
//     actual = (actual - 1 + total) % total;
//     render();
// });

// render();
  AOS.init( {
   duration:900 
  })

  $(function(){
    var tarjetas = $(".platotar");
    var nombre = $(".info a");
    var total = tarjetas.length;
    var actual = 0;

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
