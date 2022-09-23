
let valores =[2,9,8,6,7,5,3]
valores.sort()
//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])


for (let pos = 0; pos < valores.length; pos++) {
        console.log(`na posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for ( let pos in valores) {
    console.log(`na posição ${pos} tem o valor ${valores[pos]}`)
}