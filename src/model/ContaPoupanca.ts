import { Conta } from './Conta'

export class ContaPoupanca extends Conta {

    //Atributo
    private _aniversario: number

    //Método construtor
    constructor (numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo)
        this._aniversario = aniversario
    }

    //Métodos getter e setter
    public get aniversario() {
        return this._aniversario
    }

    public set aniversario(aniversario: number) {
        this._aniversario = aniversario
    }

    //Método específico
    public visualizar(): void {
        super.visualizar()
        console.log('Dia do aniversário: ' + this._aniversario)
    }






}