    function somar() {
        num1 = document.getElementById('txt1');
        num2 = document.getElementById('txt2');
        n1 = Number(num1.value);
        n2 = Number(num2.value);
        res = document.getElementById('res');
        resposta = n1 + n2;

        res.innerHTML = `${n1} + ${n2} = ${resposta}`
    }

    function subtrair () {
        num1 = document.getElementById('txt1');
        num2 = document.getElementById('txt2');
        n1 = Number(num1.value);
        n2 = Number(num2.value);
        res = document.getElementById('res');
        resposta = n1 - n2;

        res.innerHTML = `${n1} - ${n2} = ${resposta}`
    }

    function multiplicar () {
        num1 = document.getElementById('txt1');
        num2 = document.getElementById('txt2');
        n1 = Number(num1.value);
        n2 = Number(num2.value);
        res = document.getElementById('res');
        resposta = n1 * n2;

        res.innerHTML = `${n1} x ${n2} = ${resposta}`
    }

    function dividir () {
        num1 = document.getElementById('txt1');
        num2 = document.getElementById('txt2');
        n1 = Number(num1.value);
        n2 = Number(num2.value);
        res = document.getElementById('res');
        resposta = n1 / n2;

        res.innerHTML = `${n1} / ${n2} = ${resposta}`
    }