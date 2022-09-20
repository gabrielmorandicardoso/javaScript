function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNas = document.getElementById('txt1')
    var res = document.getElementById('res')
    var analise = anoNas - anoAtual

}

res.innerHTML = analise