
function contagem() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let contar = document.getElementById('cont')
    let res = document.getElementById('res')
    

    if(inicio.value.length == 0 || fim.value.length == 0 || contar.value.length == 0) {
        window.alert('Erro, reveja os dados!')
    } else {
        res.innerHTML = 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let con = Number(contar.value)

        if (con <= 0) {
            window.alert('invalido, considerando contagem de 1 em 1.')
            con = 1
        }
        if (i < f ) {
            for (let c = i; c <= f; c += con) {
                res.innerHTML += c + " "
            }
        } else {
                for (let c = i; c >= f; c -= con){
                    res.innerHTML += c + " "
                }
        }
        
    }
}