var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('cofre'))
if (listaFilmes == null) {
    listaFilmes = []
}
exibirFilmes()

function exibirFoto() {
    var imagem = document.getElementById('capa').value
    document.getElementById('fotinha').src = imagem
}

function exibirFilmes() {
    document.getElementById('abretesesamo').innerHTML = ""

    listaFilmes.forEach((item, indice) => {
        document.getElementById("abretesesamo").innerHTML += 
            `<div>
                <img src="${item.link}" class="picture">
                <img src="/stargeek/img/lixo.png" class='excluir' onclick='excluirFilme(${indice})'>
            </div>`
    })
}

function excluirFilme(indice) {

    if (confirm("Deseja realmente excluir esse título?") == true) {
        listaFilmes.splice(indice, 1)
        localStorage.setItem('cofre', JSON.stringify(listaFilmes))
        exibirFilmes()
    }
    else {
        return false
    }

}