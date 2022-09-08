var data = new Date();
const dataAtualAno = data.getFullYear();
const dataAtualMes = data.getMonth() + 1;
const dataAtualDia = data.getDate();
function enviar() {
    /*Data do Aniversário*/
    const valorData = document.querySelector(".dataNascimento").value;
    const [year, month, day] = valorData.split('-');
    const dataAniversario = new Date(+year, +month - 1, +day);

    let resultado = document.querySelector(".resultado");
    const idade = calculaIdade(dataAniversario);
    if (isNaN(idade)) {
        resultado.innerHTML = "Data Obrigatória";
    }
    else if (idade < 0) {
        resultado.innerHTML = "Data Inválida";
    } else {
        resultado.innerHTML = (idade) + " anos";
        let verSigno = calculaSigno(dataAniversario);
        mostraSigno(verSigno);
    }
}

const modoEscuro = document.querySelector("#modoEscuro")
const html = document.querySelector("html")
modoEscuro.addEventListener("click", function () {
    event.preventDefault()
    html.classList.toggle("modoEscuro");
});
function calculaIdade(dataA) {
    var anoAniversario = dataA.getFullYear();
    var mesAniversario = dataA.getMonth() + 1;
    var diaAniversario = dataA.getDate();
    var dataComparacao = new Date(dataAtualAno, mesAniversario - 1, diaAniversario)

    if (dataComparacao >= data) {
        idade = (dataAtualAno - anoAniversario) - 1;

    } else {
        idade = (dataAtualAno - anoAniversario);

    }
    return idade
}
function calculaSigno(dataAniversario) {
    const mes = dataAniversario.getMonth() + 1;
    const dia = dataAniversario.getDate();
    let signo;
    switch (mes) {
        case 1:
            if (dia >= 20) {
                signo = "Aquários"
            } else {
                signo = "Capricórnio"
            }
            break;
        case 2:
            if (dia >= 19) {
                signo = "Peixes"
            } else {
                signo = "Aquários"
            }
            break;
        case 3:
            if (dia >= 21) {
                signo = "Áries"
            } else {
                signo = "Peixes"
            }
            break;
        case 4:
            if (dia >= 21) {
                signo = "Touro"
            } else {
                signo = "Áries"
            }
            break;
        case 5:
            if (dia >= 21) {
                signo = "Gêmeos"
            } else {
                signo = "Touro"
            }
            break;
        case 6:
            if (dia >= 21) {
                signo = "Câncer"
            } else {
                signo = "Gêmeos"
            }
            break;
        case 7:
            if (dia >= 23) {
                signo = "Leão"
            } else {
                signo = "Câncer"
            }
            break;
        case 8:
            if (dia >= 23) {
                signo = "Virgem"
            } else {
                signo = "Leão"
            }
            break;
        case 9:
            if (dia >= 23) {
                signo = "Libra"
            } else {
                signo = "Virgem"
            }
            break;
        case 10:
            if (dia >= 23) {
                signo = "Escorpião"
            } else {
                signo = "Libra"
            }
            break;
        case 11:
            if (dia >= 22) {
                signo = "Sagitário"
            } else {
                signo = "Escorpião"
            }
            break;
        case 12:
            if (dia >= 22) {
                signo = "Capricórnio"
            } else {
                signo = "Sagitário"
            }
            break;


    }
    return signo;

}
function mostraSigno(nomeSigno) {
    const imagem = document.querySelector(".imagem");
    imagem.classList.remove("esconde");
    imagem.setAttribute("src", "./imagens/" + nomeSigno + ".png");

}
function limpar() {
    let resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";
    const imagem = document.querySelector(".imagem");
    imagem.setAttribute("src", "" + + "");
    imagem.classList.add("esconde")
}

