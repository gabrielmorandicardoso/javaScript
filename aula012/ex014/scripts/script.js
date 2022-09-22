    function tabuada() {
        let num = document.getElementById('txtn')
        let tab = document.getElementById('seltab')

        if(num.value.length == 0) {
            window.alert('Por favor, digite o número.')
        } else{
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while(c <= 10) {
                let item = document.createElement('option') //criando um elemento option
                item.text = `${n} x ${c} = ${n*c}` // insirindo texto no elemento option, com a variavel item
                item.value = `tab ${c}`
                tab.appendChild(item) // adicionar um elemento filho
                c++
            }
        }
        
    }