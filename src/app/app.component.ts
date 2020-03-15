import { Component } from '@angular/core';
import { PoDialogService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app1';
  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string

  constructor(public poDialog: PoDialogService) { }

  public encerrarJogo(tipo: string): void {
    //this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo
    if (this.tipoEncerramento === "derrota") {
      this.jogoEmAndamento = false
      this.poDialog.alert({
        title: 'Derrota!',
        message: 'Infelizmente não foi desta vez :(',
        literals: { ok: 'Reiniciar' },
        ok: () => this.reiniciarJogo()
      })
    } else {
      this.jogoEmAndamento = false
      this.poDialog.alert({ 
        title: 'Vitória!', 
        message: 'Parabéns! Você venceu! :)',
        literals: { ok: 'Reiniciar' },
        ok: () => this.reiniciarJogo()
      })
    }
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
