import { Component, OnInit, EventEmitter, Output, OnDestroy  } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'
import { PoStepperComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase abaixo"
  public resposta: string = ""
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  public atualizaResposta(resposta: string): void {
    this.resposta = resposta.trim();
  }

  public verificarResposta(): void {
    //trocar pergunta da rodada
    if(this.rodadaFrase.frasePtBr.toLowerCase() == this.resposta.toLowerCase()){
      this.trocarResposta();
    } else {
      this.tentativas--;
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  private trocarResposta(): void {
    this.rodada++
    this.progresso = this.progresso + (100 / this.frases.length)
    if(this.rodada === 4){
      this.encerrarJogo.emit('vitoria')
    } else {
      this.atualizaRodada();
    }
  }

  private atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = '' //limpar resposta
  }

  ngOnDestroy(){
  }

}
