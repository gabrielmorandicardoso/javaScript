function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let cont = document.getElementById('txtc')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || cont.value.length == 0) {
        res.innerHTML = 'Não valido! Insira os números.'
    } else {
        res.innerHTML = "Contagem: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let c = Number(cont.value)

        if (c <= 0) {
            window.alert('o contador está zerado, sera feito a contagem de 1 a 1. ')
            c = 1
        }
        
        if (i < f) { 
        for (let n = i; n <= f; n += c) {
            
            res.innerHTML += `${n} `
        }
    } else {
        for (let n = i; n >= f; n -= c) {
            res.innerHTML += `${n} ` 
        }
    }

    }
}