var welcome = []

welcome = JSON.parse(localStorage.getItem('caixadepandora'))
if (welcome == null) {
    welcome = []
}

function oz(){
    var email = document.getElementById("laguin").value
    var senha = document.getElementById("protegido").value

    var encontrou = false

    welcome.forEach(item => {
        if (email == item.email && senha == item.senha) { 
            location.href = 'principal.html'
            encontrou = true
        }
    })

    if(encontrou == false) {
        document.getElementById("caderno").innerHTML= `Usúario ou senha não encontrados`

    }
}

