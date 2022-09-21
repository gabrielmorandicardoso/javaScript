function dados() {
    var data = new Date()
    var ano = data.getFullYear()
    var nome = document.getElementById('name')
    var nas = document.getElementById('nas')
    var idade = ano - Number(nas.value)
    var cidade = document.getElementById('city')

    res.innerHTML = 'O seu nome é ' + nome + 'Você tem ' + idade + ' anos de vida. ' + 'E a sua cidade é ' + cidade + '.'
}