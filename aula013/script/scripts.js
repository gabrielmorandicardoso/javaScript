function calcular() {
    let t1 = document.getElementById('txt1')
    let t2 = document.getElementById('txt2')
    let res = document.getElementById('res')
    let n1 = Number(t1.value)
    let n2 = Number(t2.value)
    let soma = n1 + n2 
    res.innerHTML = `${n1} + ${n2} = ${soma}`

}