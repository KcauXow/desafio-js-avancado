const form = document.querySelector("form");
const campos = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    telefone: document.getElementById("telefone"),
    mensagem: document.getElementById("mensagem")
};

const alertas = {
    nome: document.querySelector(".alerta-nome"),
    email: document.querySelector(".alerta-email"),
    telefone: document.querySelector(".alerta-tel"),
    mensagem: document.querySelector(".alerta-mensagem")
};

form.addEventListener("submit", function () {
    let formularioValido = true;

    for (let campo in campos) {
        const input = campos[campo];
        const alerta = alertas[campo];

        if (input.value.trim() === "") {
            input.classList.remove("preenchido");
            input.classList.add("erro");
            alerta.style.display = "block";
            formularioValido = false;
        } else {
            input.classList.remove("erro");
            input.classList.add("preenchido");
            alerta.style.display = "none";
        }
    }

    if (!formularioValido) {
        e.preventDefault();
    }
});
