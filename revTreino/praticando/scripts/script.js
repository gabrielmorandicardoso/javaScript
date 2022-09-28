let num = document.getElementById('formN');
let lista = document.querySelector('select#lista');
let res = document.querySelector('div#res');
let valores = []

    function numeros(n) {
        if (Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function bloco(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {
        if (numeros(num.value) && !bloco(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `O valor adicionado é ${num.value}.`
            lista.appendChild(item)



        } else {
            window.alert('Número inválido ou ja cadastrado!')
        }
        num.value = ''
        num.focus()
    }

        function analisar() {
            if (valores.length == 0) {
                window.alert('Preencha o campo abaixo!')
            } else {
                let tot = valores.length; 
                let maior = valores[0];
                let menor = valores[0];
                let soma = 0;
                let media = 0
                for (let pos in valores) {
                    soma  += valores[pos]
                    if (valores[pos] > maior) 
                         maior = valores[pos] 
                    

                    if (valores[pos] < menor) 
                        menor = valores[pos]
                    
                 }
                 media = soma / tot;
                 res.innerHTML = ''
                 res.innerHTML += `<p>O total de elementos é ${tot}.</p>`
                 res.innerHTML += `<p>O maior valor é ${maior}.</p>`
                 res.innerHTML +=`<p>O menor valor é ${menor}.</p>`
                 res.innerHTML += `<p>A soma entre os valores é ${soma}.</p>`
                 res.innerHTML += `A média dos valores é ${media}`
            }
        }
    