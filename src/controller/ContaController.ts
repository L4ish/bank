import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>() //array que armazenará o dado de todas as contas
    numero: number = 0

    public procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)

        if (buscaConta != null) {
            buscaConta.visualizar()
        }else 
            console.log(colors.fg.redstrong, '\nA Conta número ' + numero + ' não foi encontrada!', colors.reset)
    }

    public listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar()
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta)
        console.log(colors.fg.cyan, '\nA conta número ' + conta.numero + ' foi criada com sucesso.',colors.reset)
    }

    public atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
            console.log(colors.fg.cyan, '\nA conta número ' + conta.numero + ' foi atualizada com sucesso!', colors.reset)
        } else 
            console.log(colors.fg.redstrong, '\nA conta número ' + conta.numero + ' não foi encontrrada', colors.reset)
    }

    public deletar(numero: number): void {
       let buscaConta = this.buscarNoArray(numero)

       if (buscaConta != null) {
        this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
        console.log(colors.fg.cyan, '\nA conta número ' + numero + ' foi apagada com sucesso!', colors.reset)
       } else
        console.log(colors.fg.redstrong,'\nA conta número' + numero + ' não foi encontrada.', colors.reset)
    }

    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)

        if (conta != null) {
            if (conta.sacar(valor) == true)
                console.log(colors.fg.cyan, '\nO saque na conta número ' + numero + ' foi efetuado com sucesso!', colors.reset)
        }else
            console.log(colors.fg.redstrong, '\nA conta número ' + numero + ' não foi encontrada!', colors.reset)
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)

        if (conta != null) {
            conta.depositar(valor)
            console.log(colors.fg.cyan, '\nO depósito na conta ' + numero + ' foi efetuado com sucesso.', colors.reset)
        } else
            console.log(colors.fg.redstrong, '\nA conta número ' + numero + ' não foi encontrada.', colors.reset)
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem)
        let contaDestino = this.buscarNoArray(numeroDestino)

        if(contaOrigem != null && contaDestino != null) {
            if(contaOrigem.sacar(valor) == true) {
                contaDestino.depositar(valor)
                console.log(colors.fg.cyan, '\nA transferência da conta número ' + numeroOrigem + ' para a conta número ' + numeroDestino + ' foi efetuada com sucesso.', colors.reset)
            }
        } else 
            console.log(colors.fg.redstrong, '\nA conta número: ' + numeroOrigem + ' e/ou a conta numero ' + numeroDestino + ' não foram encontradas.', colors.reset)
    }

    //Métodos auxiliares
    public gerarNumero(): number { //gerar número da conta
        return ++ this.numero
    }

    public buscarNoArray(numero: number): Conta | null { //chega se uma conta existe
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta
        }
        return null
    }
}
    
