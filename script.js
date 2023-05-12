class Barramentos {

    barramentoA = 0
    barramentoB = 0
    barramentoC = 0
//get a
    get barramentoA() {
        return this.barramentoA
    }

	setBarramentoA(barramentoA) {
		this.barramentoA = barramentoA
	}
//get b
	get barramentoB() {
		return this.barramentoB
	}

	setBarramentoB(barramentoB) {
		this.barramentoB = barramentoB
	}
//get c
	get barramentoC() {
		return this.barramentoC
	}

	setBarramentoC(barramentoC) {
		this.barramentoC = barramentoC
	}
//retorna todos os valores
	getValues() {
		return `Barramento A: ${this.barramentoA}\nBarramento B: ${this.barramentoB}\nBarramento C: ${this.barramentoC}`
	}

}

class Memoria {
    
    memoria = []

    registrar(n) {
        this.memoria.push(n)
    }

    get tamanhoMemoria() {
        return this.memoria.length
    }

    getMemoriaLocal(local) {//consertar
        return this.memoria[local]
    }

    getAllMemoria() {//consertar
        for (i = 0; i < this.memoria.length; i++) {
            return `Local da memória ${i + 701}: ${getMemoriaLocal(i)}`
        }
    }

}

class Registradores {
    registradores = []

    registrarVazio(n) {
        this.registradores.push(n)
    }

    registrarNovo(n, i) {
        this.registradores[i] = n
    }

    getRegistrador(i) {
        return this.registradores[i]
    }

    getArraySize() {
        return this.registradores.length
    }

    //falta imprimir
}

