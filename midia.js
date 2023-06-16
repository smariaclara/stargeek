
var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('cofre'))
if (listaFilmes == null) {
    listaFilmes = []
}

exibirFilmes()


function validarCadastro(nomeFilme, imagemFilme) {
    if (nomeFilme != '' && imagemFilme != '') {
        return true
    } else {
        return false
    }
}

function ameiodiei() {
    var nomeFilme = document.getElementById("filemserielivro").value
    var imagemFilme = document.getElementById("capa").value

    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
    if (possoCadastrar == false) {
        alert('Verifique os dados antes de cadastrar')
        return
    }

    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }

    listaFilmes.push(filme)
    localStorage.setItem('cofre', JSON.stringify(listaFilmes))
    location.href = 'cadastrados.html'
    exibirFilmes()

    document.getElementById("filemserielivro").value = ''
    document.getElementById("capa").value = ''
    document.getElementById("filemserielivro").focus()
}

