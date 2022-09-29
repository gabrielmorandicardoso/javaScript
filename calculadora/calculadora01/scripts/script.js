    let res = document.getElementById('res')
    let operadores = ['+', '-', '*', '/']
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let valores = []
    let oper = []
    
    function somar(){
        if (res == operadores) {
            alert('adicione um número!')
        }
        if (res == '' ){
            res.innerHTML = operadores[0]
            } else {
                res.innerHTML += ` ${operadores[0]}`
                oper.push(operadores[0])
            }
    }
    function um() {
        if (res == ''){
        res.innerHTML = num[0]
        } else {
            res.innerHTML += ` ${num[0]}`
            valores.push(Number(num[0]))
        }
    }
    function dois() {
        if (res == ''){
        res.innerHTML = num[1]
        } else {
            res.innerHTML += ` ${num[1]}`
        }
    }
    function tres() {
        if (res == ''){
        res.innerHTML = num[2]
        } else {
            res.innerHTML += ` ${num[2]}`
        }
    }
    function quatro() {
        if (res == ''){
        res.innerHTML = num[3]
        } else {
            res.innerHTML += ` ${num[3]}`
        }
    }
    function cinco() {
        if (res == ''){
        res.innerHTML = num[4]
        } else {
            res.innerHTML += ` ${num[4]}`
        }
    }
    function seis() {
        if (res == ''){
        res.innerHTML = num[5]
        } else {
            res.innerHTML += ` ${num[5]}`
        }
    }
    function sete() {
        if (res == ''){
        res.innerHTML = num[6]
        } else {
            res.innerHTML += ` ${num[6]}`
        }
    }
    function oito() {
        if (res == ''){
        res.innerHTML = num[7]
        } else {
            res.innerHTML += ` ${num[7]}`
        }
    }
    function nove() {
        if (res == ''){
        res.innerHTML = num[8]
        } else {
            res.innerHTML += ` ${num[8]}`
        }
    }
    function zero() {
        if (res == ''){
        res.innerHTML = num[9]
        } else {
            res.innerHTML += ` ${num[9]}`
        }
    }

    function calcular() {
        total = valores[0],  oper[0], valores[1]

        res.innerHTML = total
        
    }

    