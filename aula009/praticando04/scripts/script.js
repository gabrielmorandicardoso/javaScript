function preferido() {
 var tipo = document.getElementsByName('sabor')
    if(tipo[0].checked) {
        res.innerHTML = 'UHMMMM. Eu amo chocolate, é feito de cacau e é adocicado e amargo.'
    } else if (tipo[1].checked) {
        res.innerHTML = 'Ahhh Baunilha é delicioso, é suave e super delicioso!'
    } else {
        res.innerHTML = 'Ah morango, minha avó gosta, eu não.'
    }

    
}