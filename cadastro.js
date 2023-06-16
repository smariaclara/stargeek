var NovoAqui = []

NovoAqui = JSON.parse(localStorage.getItem('caixadepandora'))
if(NovoAqui == null){
    NovoAqui = []
}

cadastrado()
console.log(NovoAqui)

function vaivaler(user, email, senha, senha2){
    if (senha != senha2){
        alert('As senhas estão diferentes')
        return false
    }

    if(user!= '' && email != '' && senha !='' && senha2 !=''){
        return true
        location.href = 'principal.html'
    }else{
        return false
    }
}

function entrar(){
    var user = document.getElementById('user').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var senha2 = document.getElementById('csenha').value

    var welcome = vaivaler(user, email, senha, senha2)
    if(welcome == false){
        alert('Todos os campos são obrigatórios')
        return
    }

    var conta ={
        user: user,
        email: email,
        senha: senha
    }

    NovoAqui.push(conta)
    localStorage.setItem('caixadepandora', JSON.stringify(NovoAqui))

    cadastrado()
    location.href = 'principal.html'
}
function cadastrado(){

}