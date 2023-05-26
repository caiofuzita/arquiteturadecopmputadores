const start = () => {
    let inputsElements = document.querySelectorAll('.input__r > input')

    for (i = 0; i < inputsElements.length; i++) {
        inputsElements[i].value = 0
    }

    let memories = document.querySelectorAll('.so')

    for (i = 0; i < memories.length; i++) {
        memories[i].value = 'Sistema Operacional'
    }
    verifyButtons()
    window.dataLayer = []
}

const verifyButtons = () => {
    disableButtons('.operations>div>input')
}

const disableButtons = (seletor) => {
    checks = document.querySelectorAll(seletor)

    verificador = false // se nao tem nenhum checado

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

const verifyBusA = () => {
    disableButtons('div.bus__optionsA > div > input')
}
const verifyBusB = () => {
    disableButtons('div.bus__optionsB > div > input')
}
const verifyBusC = () => {
    disableButtons('div.bus__optionsC > div > input')
}

const mainProgram = () => {
    values = getMemoryValue()
    displayAB()
    calculate()
    registerCache()
    registerMemory()
}

const getMemoryValue = () => {
    ans = {
        r0: document.querySelector('#inp0').value,
        r1: document.querySelector('#inp1').value,
        r2: document.querySelector('#inp2').value,
        r3: document.querySelector('#inp3').value
    }
    
    return ans
}

const getBusMarked = () => {
    valueInput = Object.values(getMemoryValue())

    busA = document.querySelectorAll('.bus__optionsA>div>input')
    busA__value = undefined
    for(var i = 0; i < busA.length; i++) {
        if (busA[i].checked) {
            busA__value = i
            busA__input = valueInput[i]
            break
        }
    }

    busB = document.querySelectorAll('.bus__optionsB>div>input')
    busB__value = undefined
    for(var i = 0; i < busB.length; i++) {
        if (busB[i].checked) {
            busB__value = i
            busB__input = valueInput[i]
            break
        }
    }

    busC = document.querySelectorAll('.bus__optionsC>div>input')
    busC__value = undefined
    for(var i = 0; i < busC.length; i++) {
        if (busC[i].checked) {
            busC__value = i
            busC__input = valueInput[i]
            break
        }
    }

    ans = {
        busA: {
            selected: `r${busA__value}`,
            value: busA__input
        },
        busB: {
            selected: `r${busB__value}`,
            value: busB__input
        },
        busC: {
            selected: `r${busC__value}`,
            value: busC__input
        }
    }

    return ans

}

const displayAB = () => {
    bus = getBusMarked()

    document.querySelector('#input__displayA').value = bus.busA.value
    document.querySelector('#input__displayB').value = bus.busB.value
} 

const calculate = () => {
    a = parseInt(document.querySelector('#input__displayA').value)
    b = parseInt(document.querySelector('#input__displayB').value)
    resultado = 0

    document.querySelector('#displayA').value = a
    document.querySelector('#displayB').value = b

    if (document.querySelector('#mais').checked) {
        resultado = a + b
    } else if (document.querySelector('#menos').checked) {
        resultado = a - b
    } else if (document.querySelector('#vezes').checked) {
        resultado = a * b
    } else if (document.querySelector('#dividir').checked) {
        resultado = a / b
    } else if (document.querySelector('#exponencial').checked) {
        resultado = a ** b
    } else if (document.querySelector('#modulo').checked) {
        resultado = a % b
    } 

    document.querySelector('#input__displayC').value = resultado

    window.dataLayer.push({
        valor: resultado
    })
}

const sleep = (s) => {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < s)
}

const registerCache = () => {
    getAllMemory = window.dataLayer.filter(e => e.valor)
    getLastMemory = getAllMemory[getAllMemory.length-1]
    //lastStep = 0
    slot = document.querySelectorAll('.valueMemory>.input__label')

    if (getAllMemory.length < 9) {
        for (i = 0; i < slot.length; i++) {
            if (slot[i].value == '') {
                slot[i].value = getLastMemory.valor
                dataLayer.push({
                    event: 'last',
                    lastStep: i
                })
                break
            }
        }
    } else {
        events = dataLayer.filter(e => e.event)
        lastEvent = events[events.length-1].lastStep
        if (lastEvent == 7) {
            slot[0].value = getLastMemory.valor
            dataLayer.push({
                event: 'last',
                lastStep: 0
            })
            lastEvent = 0
        } else {
            slot[lastEvent+1].value = getLastMemory.valor
            dataLayer.push({
                event: 'last',
                lastStep: lastEvent+1
            })
        }
    }
}

const registerMemory = () => {
    bus = getBusMarked()
    selected = bus.busC.selected
    result = document.querySelector('#input__displayC').value
    if(selected.includes('r0')) {
        document.querySelector('#inp0').value = result
    } else if (selected == 'r1') {
        document.querySelector('#inp1').value = result
    } else if (selected == 'r2') {
        document.querySelector('#inp2').value = result
    } else if (selected == 'r3') {
        document.querySelector('#inp3').value = result
    }

}