    let num = document.getElementById('txtn');
    let area = document.getElementById('area');
    let res = document.getElementById('res');
    let valores = []
    function numeros(n, a) {
        if (a.Number(n.value) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {
        if (Number(num.value) == '') {
            window.alert('coloque os números!')
        } else {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `${num.value}`
            area.appendChild(item)
        }
    }

    function somar() {
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }
        res.innerHTML = `${soma}`
        
    }

   