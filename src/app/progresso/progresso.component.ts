import { Component, OnInit, Input, ViewChild, } from '@angular/core';
import { PoStepperComponent, PoStepComponent  } from '@portinari/portinari-ui';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
