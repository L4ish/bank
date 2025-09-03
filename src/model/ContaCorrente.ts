import { Conta } from './Conta'

export class ContaCorrente extends Conta {

    //Atributo
    private _limite: number

    //Método construtor
    constructor (numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo)
        this._limite = limite
    }

    //Métodos getter e setter
    public get limite() {
        return this._limite
    }

    public set limite(limite: number) {
        this._limite = limite
    }

    //Métodos específicos
    public sacar(valor: number): boolean {
        if ((this.saldo + this._limite) < valor) {
            console.log('\nSaldo insuficiente!')
            return false
        }
//acesso ao método get saldo, visando que _saldo é privado e da classe mãe. Onde o método público get, consegue acessar o atributo privado _saldo e usar no saldo. 
        this.saldo = this.saldo - valor
        return true
    }

    public visualizar(): void {
        super.visualizar()
        console.log('Limite: ' + this._limite.toFixed(2))
    }



}