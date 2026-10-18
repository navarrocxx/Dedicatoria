
const botonCarta = document.getElementById("botonCarta");
const carta = document.getElementById("carta");

botonCarta.addEventListener("click", function () {
    carta.classList.toggle("oculta");

    if (carta.classList.contains("oculta")) {
        botonCarta.textContent = "Abrir mi corazón";
    } else {
        botonCarta.textContent = "Cerrar mi carta";
        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});

const mensajes = [
    "Mi parte favorita del día es aquella en la que hablo contigo.",
    "No tienes que ser perfecta para ser alguien increíble para mí.",
    "Si pudiera repetir un momento bonito, elegiría uno a tu lado.",
    "Tu felicidad también importa para mí, incluso en los días difíciles.",
    "Entre tantas personas, qué bonito que nuestros caminos se encontraran.",
    "No necesito una fecha especial para recordarte cuánto te quiero.",
    "Ojalá nunca te falten motivos para sonreír."
];

let indice = 0;

document.getElementById("botonMensaje").addEventListener("click", function () {
    document.getElementById("mensaje").textContent = mensajes[indice];

    indice++;

    if (indice >= mensajes.length) {
        indice = 0;
    }
});

function crearCorazon() {
    const corazon = document.createElement("span");

    corazon.classList.add("corazon-flotante");
    corazon.textContent = Math.random() > 0.5 ? "♥" : "♡";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (14 + Math.random() * 22) + "px";
    corazon.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("corazones").appendChild(corazon);

    setTimeout(function () {
        corazon.remove();
    }, 10000);
}

setInterval(crearCorazon, 500);
