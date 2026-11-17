
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

    document.querySelectorAll(".menuhbg a").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            menu.classList.remove("active")
        })
    })

    var platos = [
        { nombre: "Ramen Cerdo",   categoria: "Ramen",     imagen: "img/tarjram1.png", precio: "12.50€", descripcion: "Caldo con fideos y láminas de cerdo, huevo, loto, judías verdes y cebolleta." },
        { nombre: "Gyozas",        categoria: "Entrantes", imagen: "img/tarjap1.png",  precio: "4.50€",  descripcion: "Empanadillas japonesas a la plancha."},
        { nombre: "Takoyaki",      categoria: "Entrantes", imagen: "img/tarjap2.png",  precio: "3.90€",  descripcion: "Bolitas de pulpo con salsa especial." },
        { nombre: "Salmón",        categoria: "Entrantes", imagen: "img/tarjap3.png",  precio: "5.10€", descripcion: " Láminas finas de salmón fresco aliñados con salsa de soja, aceite de sésamo y jengibre." },
        { nombre: "Onigiri",       categoria: "Entrantes", imagen: "img/tarjap4.png",  precio: "5.50€", descripcion: "Arroz blanco rellenos de atún con mayonesa, envueltos de una tira de alga nori." },
        { nombre: "Ramen Marisco", categoria: "Ramen",     imagen: "img/tarjram2.png", precio: "13.50€", descripcion: "Caldo de gambas con chipirones y almejas, acompañados de loto, judías verdes, huevo y sésamo." },
        { nombre: "Ramen Ternera", categoria: "Ramen",     imagen: "img/tarjram3.png", precio: "13.00€", descripcion: "Caldo con trozos de ternera, huevo, cebolleta verde, tiras de algas, bambú y especias." },
        { nombre: "Ramen Pollo",   categoria: "Ramen",     imagen: "img/tarjram4.png", precio: "11.50€", descripcion: "Caldo cremoso con pollo troceado, huevo, cebolleta verde, tiras de algas, bambú y especias." },
        { nombre: "Sake",          categoria: "Bebidas",   imagen: "img/tarjbeb1.png", precio: "5.00€", descripcion: "Bebida alchólica tradicional conseguida mediante la fermentación de arroz." },
        { nombre: "Cerveza",       categoria: "Bebidas",   imagen: "img/tarjbeb2.png",  precio: "3.50€", descripcion: "Cerveza fría embotellada de 300ml." },
        { nombre: "Refrescos",     categoria: "Bebidas",   imagen: "img/tarjbeb3.png", precio: "2.50€", descripcion: "Botella de refresco a elegir entre Cocacola, Nestea o Aquarius." },
        { nombre: "Agua",          categoria: "Bebidas",   imagen: "img/tarjbeb4.png", precio: "2.00€", descripcion: "Botella de agua fresca natural de 350ml." },
        { nombre: "Dorayaki",      categoria: "Postres",   imagen: "img/tarjpos1.png", precio: "4.50€", descripcion: "Un bizcocho esponsojo y redondo relleno de chocolate, nata , o pasta dulce de judías." },
        { nombre: "Dango",         categoria: "Postres",   imagen: "img/tarjpos2.png", precio: "4.00€", descripcion: "Pastel japonés hecho con harina de arroz, muy parecido al mochi, pinchado con un palo y mojados en té verde." },
        { nombre: "Taiyaki",       categoria: "Postres",   imagen: "img/tarjpos4.png", precio: "4.90€", descripcion: "Pastel japonés en forma de pez relleno tradicionalmente con pasta de judías rojas." },
        { nombre: "Mochi",         categoria: "Postres",   imagen: "img/tarjpos3.png", precio: "4.50€", descripcion: "Pastel japonés hecho con harina de arroz y rellenos de una pasta dulce de coco." },
    ];
    var contenedor = document.querySelector("#cards")
    var modal = document.querySelector("#modal");
    var ultimaTarjeta = null;

    function abrirModal(plato, tarjeta) {
        ultimaTarjeta = tarjeta;

        document.querySelector("#modal-img").src = plato.imagen;
        document.querySelector("#modal-img").alt = plato.nombre;
        document.querySelector("#modal-nombre").textContent = plato.nombre;
        document.querySelector("#modal-precio").textContent = plato.precio;

        var desc = document.querySelector("#modal-desc");
        desc.textContent = plato.descripcion || "";
        desc.style.display = plato.descripcion ? "block" : "none";

        modal.classList.add("abierto");
        modal.setAttribute("aria-hidden", "false");
        modal.querySelector(".modal-cerrar").focus();
    }

    function cerrarModal() {
        if (document.activeElement) document.activeElement.blur();
        modal.classList.remove("abierto");
        modal.setAttribute("aria-hidden", "true");
        if (ultimaTarjeta) ultimaTarjeta.focus();
    }

    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal || e.target.closest(".modal-cerrar")) cerrarModal();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") cerrarModal();
        });
    }
    if (contenedor) {
        var botones = document.querySelectorAll(".filtro");

        function pintar(lista) {
            contenedor.innerHTML = "";

            lista.forEach(function (plato) {
                var tarjeta = document.createElement("div");
                tarjeta.className = "plato-card";
                tarjeta.dataset.nombre = plato.nombre;
                tarjeta.tabIndex = 0;
                tarjeta.innerHTML =
                    '<div class="plato-img">' +
                        '<img src="' + plato.imagen + '" alt="' + plato.nombre + '">' +
                    '</div>' +
                    '<p class="plato-nombre">' + plato.nombre + '</p>' +
                    '<p class="plato-precio">' + plato.precio + '</p>';
                contenedor.appendChild(tarjeta);
            });
        }

        function filtrar(categoria) {
            var todos = categoria === "Todos";
            contenedor.classList.toggle("dos-col", !todos);

            pintar(todos ? platos : platos.filter(function (plato) {
                return plato.categoria === categoria;
            }));
        }

        botones.forEach(function (boton) {
            boton.addEventListener("click", function () {
                botones.forEach(function (b) {
                    b.classList.remove("is-activo");
                });
                boton.classList.add("is-activo");
                filtrar(boton.dataset.categoria);
            });
        });

        pintar(platos);

    
        contenedor.addEventListener("click", function (e) {
            var tarjeta = e.target.closest(".plato-card");
            if (!tarjeta) return;
            var plato = platos.find(function (p) {
                return p.nombre === tarjeta.dataset.nombre;
            });
            if (plato) abrirModal(plato, tarjeta);
        });


        contenedor.addEventListener("keydown", function (e) {
            if (e.key !== "Enter") return;
            var tarjeta = e.target.closest(".plato-card");
            if (tarjeta) tarjeta.click();
        });
    }

    /*BANNER DE COOKIES */
var cookieBanner = document.querySelector("#cookieBanner");
var cookieAccept = document.querySelector("#cookieAccept");
var cookieReject = document.querySelector("#cookieReject");

if (cookieBanner) {
    setTimeout(function () {
        cookieBanner.style.display = "block";
    }, 600);

    function cerrarBanner() {
        cookieBanner.style.display = "none";
    }

    if (cookieAccept) cookieAccept.addEventListener("click", cerrarBanner);
    if (cookieReject) cookieReject.addEventListener("click", cerrarBanner);
}

var logoMenu = document.querySelector(".shiromenu");

if (logoMenu) {
    logoMenu.addEventListener("click", function (e) {
        var enlace = logoMenu.querySelector("a");
        var destino = enlace ? enlace.getAttribute("href") : null;

        if (destino && destino.indexOf("#") !== 0) {
            e.preventDefault();
            setTimeout(function () {
                window.location.href = destino;
            }, 1000);
        }

        logoMenu.classList.remove("girando");
        void logoMenu.offsetWidth; 
        logoMenu.classList.add("girando");
    });

    logoMenu.addEventListener("animationend", function () {
        logoMenu.classList.remove("girando");
    });
}

const el = document.querySelector(".imgraton");

const xTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3.out" });
const yTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3.out" });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});