let num = [2,5,6,9,8,3,1]
num.push(7)
num.sort()
for (let pos in num) {
console.log(`O valor ${num[pos]}, esta na posição ${pos}`)

}
let ele = num.indexOf(5)
 if(ele == -1) {
    console.log(`não existe o valor!`)
 } else {
    console.log(`o valor expresso esta na posição ${ele}`)
 }