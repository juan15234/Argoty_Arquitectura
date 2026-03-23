const hamburguesa_menu = document.querySelector(".hamburguesa-menu");
const navegacion = document.querySelector(".navegacion");

hamburguesa_menu.addEventListener("click", () => {
  navegacion.classList.toggle("mostrar");
  hamburguesa_menu.classList.toggle("girar");
});

const btn_imagen_anterior = document.getElementById("btn_anterior_img");
const btn_imagen_siguiente = document.getElementById("btn_siguiente_img");
const galeria_equipo = document.querySelector(".galeria_equipo");

btn_imagen_anterior.addEventListener("click", () => {
  galeria_equipo.scrollLeft -= galeria_equipo.clientWidth;
});

btn_imagen_siguiente.addEventListener("click", () => {
  galeria_equipo.scrollLeft += galeria_equipo.clientWidth;
});

const galeria_proyectos = document.querySelectorAll(".galeria_proyectos");
const card_servicio = document.querySelectorAll(".card-servicio");

const span_proyectos_face = document.querySelectorAll(".card_face span");
const card_face = document.querySelectorAll(".card_face");

const card_back = document.querySelectorAll(".card_back");
const span_proyectos_back = document.querySelectorAll(".card_back span");
const titulo_proyectos_back = document.querySelectorAll(".card_back h2");
const texto_proyecto = document.querySelectorAll(".card_back p");

const intervalos = [];

galeria_proyectos.forEach((galeria, i) => {
  galeria.dataset.index = 1;

  function cambiar_imagen() {
    let index = parseInt(galeria.dataset.index);
    const total = galeria.children.length;

    if (index >= total) {
      galeria.scrollLeft = 0;
      galeria.dataset.index = 1;
    } else {
      galeria.scrollLeft += galeria.clientWidth;
      galeria.dataset.index = index + 1;
    }
  }
  intervalos[i] = setInterval(cambiar_imagen, 4000);
});

span_proyectos_face.forEach((span, index) => {
  span.addEventListener("click", () => {
    card_servicio[index].classList.toggle("flip");
    clearInterval(intervalos[index]);

    //Servicio Obra Nueva
    if (index == 0) {
      const galeria = galeria_proyectos[index];
      const index_proyecto = parseInt(galeria.dataset.index);

      console.log(index_proyecto);

      if (index_proyecto == 1) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/obra_nueva/edificio-ingenio/principal-1.jpg";
        titulo_proyectos_back[index].textContent = "Edificio Ingenio";
        texto_proyecto[index].textContent = "";
      } else if (index_proyecto == 2) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/obra_nueva/Marbella-plaza/principal-1.jpg";
        titulo_proyectos_back[index].textContent = "Marbella Plaza";
        texto_proyecto[index].textContent = "asd";
      } else if (index_proyecto == 3) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/obra_nueva/Casa campestre Q02/KULI8182 (2).JPG";
        titulo_proyectos_back[index].textContent = "Casa Campestre Q02";
        texto_proyecto[index].textContent = "asdasd";
      }
    }

    //Servicio Remodelación
    if (index == 1) {
      const galeria = galeria_proyectos[index];
      const index_proyecto = parseInt(galeria.dataset.index);

      if (index_proyecto == 1) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/remodelacion/alejandro-davila/imagen-1.jpg";
        titulo_proyectos_back[index].textContent =
          "Consultorio Alejandro Davila";
        texto_proyecto[index].textContent = "";
      } else if (index_proyecto == 2) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/remodelacion/Apartamento-LaArboleda/principal-2.jpeg";
        titulo_proyectos_back[index].textContent = "Apartamento La Arboleda";
        texto_proyecto[index].textContent = "asd";
      } else if (index_proyecto == 3) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/remodelacion/Consultorio-WIZZ/principal-2.jpg";
        titulo_proyectos_back[index].textContent = "Consultorio WIZZ";
        texto_proyecto[index].textContent = "asdasd";
      } else if (index_proyecto == 4) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/remodelacion/daniel-cordoba/principal-2.JPG";
        titulo_proyectos_back[index].textContent = " Consultorio Daniel Cordoba";
        texto_proyecto[index].textContent = "asdasd";
      } else if (index_proyecto == 5) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/remodelacion/Optica/principal-2.jpg";
        titulo_proyectos_back[index].textContent = "Consultorio Optica";
        texto_proyecto[index].textContent = "asdasd";
      }
    }

    //Servicio diseño arquitectonico
    if (index == 2) {
      const galeria = galeria_proyectos[index];
      const index_proyecto = parseInt(galeria.dataset.index);

      if (index_proyecto == 1) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/Casa DELONIX/Scene 5.png";
        titulo_proyectos_back[index].textContent =
          "Casa DELONIX";
        texto_proyecto[index].textContent = "";
      } else if (index_proyecto == 2) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/Casa-Chia/principal-1.jpg";
        titulo_proyectos_back[index].textContent = "Casa Chia";
        texto_proyecto[index].textContent = "asd";
      } else if (index_proyecto == 3) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/Casa-Gaudi/imagen-4.jpg";
        titulo_proyectos_back[index].textContent = "Casa Gaudi";
        texto_proyecto[index].textContent = "asdasd";
      } else if (index_proyecto == 4) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/Casa-L16/imagen-2.jpg";
        titulo_proyectos_back[index].textContent = "Casa L16";
        texto_proyecto[index].textContent = "asdasd";
      } else if (index_proyecto == 5) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/Casa-L20/imagen-1.jpg";
        titulo_proyectos_back[index].textContent = "Casa L20";
        texto_proyecto[index].textContent = "asdasd";
      }else if (index_proyecto == 6) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/Casa-O19/imagen-3.jpg";
        titulo_proyectos_back[index].textContent = "Casa O19";
        texto_proyecto[index].textContent = "asdasd";
      }else if (index_proyecto == 7) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/Edificio-Juanambu-NOUVAVITA/principal-2.jpg";
        titulo_proyectos_back[index].textContent = "Edificio NOUVAVITA";
        texto_proyecto[index].textContent = "asdasd";
      }else if (index_proyecto == 8) {
        card_back[index].style.backgroundImage =
          "url('imagenes/servicios_imagenes/diseño_arquitectonico/sara-zapata/imagen-1.jpeg";
        titulo_proyectos_back[index].textContent = "Consultorio Sara Zapata";
        texto_proyecto[index].textContent = "asdasd";
      }
    }
  });
});

span_proyectos_back.forEach((span, index) => {
  span.addEventListener("click", () => {
    card_servicio[index].classList.toggle("flip");
    clearInterval(intervalos[index]);

    const galeria = galeria_proyectos[index];

    intervalos[index] = setInterval(() => {
      let i = parseInt(galeria.dataset.index);
      const total = galeria.children.length;

      if (i >= total) {
        galeria.scrollLeft = 0;
        galeria.dataset.index = 1;
      } else {
        galeria.scrollLeft += galeria.clientWidth;
        galeria.dataset.index = i + 1;
      }
    }, 4000);
  });
});

const titulos_card_proyectos = document.querySelectorAll(".titulos_card");
titulos_card_proyectos.forEach((titulo_card, index) => {
  titulo_card.addEventListener("mouseenter", () => {
    clearInterval(intervalos[index]);
  });

  titulo_card.addEventListener("mouseleave", () => {
    clearInterval(intervalos[index]);
    const galeria = galeria_proyectos[index];

    intervalos[index] = setInterval(() => {
      let i = parseInt(galeria.dataset.index);
      const total = galeria.children.length;

      if (i >= total) {
        galeria.scrollLeft = 0;
        galeria.dataset.index = 1;
      } else {
        galeria.scrollLeft += galeria.clientWidth;
        galeria.dataset.index = i + 1;
      }
    }, 4000);
  });
});
