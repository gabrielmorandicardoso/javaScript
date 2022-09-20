function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe.h.png')
            } else if (idade <30) {
                //jovem
                img.setAttribute('src', 'imagens/jovem.h.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.h.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe.f.png')
            } else if (idade <30) {
                //jovem
                img.setAttribute('src', 'imagens/jovem.f.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.f.png')
            }
        }
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.'
        res.appendChild(img)
    }
}