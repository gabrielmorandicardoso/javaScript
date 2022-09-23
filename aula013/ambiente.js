let num = [2,5,6]
num[3] = 9
num.push (7)
num.sort()

console.log (`O nosso vetor é ${num}`)
console.log (`o numero de elementos do vetor é ${num.length}`)

let pos = num.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}