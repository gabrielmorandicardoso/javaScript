function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('txt1')
    var res = document.getElementById('res')


    if (nas.value.length == 0 || nas.value > ano) {
        res.innerHTML = "Não está correto os campos preenchidos, tente novamente!"
        } else {
        var fSex = document.getElementsByName("sex")
        var idade = ano - Number(nas.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'homem'
            if (idade > 0 && idade < 13) {
                var tipo = 'Criança'
            } else if (idade < 25) {
                var tipo = "Jovem"
            } else if (idade < 59) {
                var tipo = "Adulto"
            } else {
                var tipo = "Idoso"
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            if (idade > 0 && idade < 13) {
                var tipo = 'Criança'
            } else if (idade < 25) {
                var tipo = "Jovem"
            } else if (idade < 59) {
                var tipo = "Adulto"
            } else {
                var tipo = "Idoso"
            }
        }
    }

        res.innerHTML = 'Analisamos a sua idade, você tem ' + idade + ' anos.' + 'Ja é considerado um ' + tipo
}

