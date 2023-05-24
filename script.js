const setupInitial = () => {
    //iniciando todos os inputs
    var inputs = document.querySelectorAll('.input_r > ul > li > input')

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = 0 
    }
}

const exec = () => {
    let input1 = document.querySelectorAll('#input__r0').value
    let input2 = document.querySelectorAll('#input__r1').value
    
}

const updateCheck = () => {
    let checks = document.querySelectorAll('[type=checkbox]')
    var verificador = false

    for (i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            verificador = true
            break
        }
    }

    if (verificador) {
        for (i = 0; i < checks.length; i++) {
            if (!checks[i].checked) {
                checks[i].setAttribute('disabled','')
            }
        }
    } else {
        for (i = 0; i < checks.length; i++) {
            checks[i].removeAttribute('disabled')
        }
    }
}