import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles:[]
  // styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress',{static: false}) txtProgress: ElementRef;
  
  @Input('NombreLeyenda') leyenda: string='Leyenda';
  @Input('NombreProgreso') progreso: number=50;
  @Output() cambiaValor: EventEmitter<number> = new EventEmitter();


  constructor() {
    // console.log('Leyenda',this.leyenda);
    // console.log('progreso',this.progreso);
   }

  ngOnInit() {
    //  console.log('Leyenda',this.leyenda);
    // console.log('progreso',this.progreso);
  }
  onChanges(valor:number){
    //  console.log(valor);
    //  let elemHTML:any = document.getElementsByName('progreso')[0];
    //  console.log(this.txtProgress);
    if (valor>=100){
      this.progreso = 100;
    }else if (valor<=0) {
      this.progreso = 0;
    } else{
      this.progreso = valor;
    }

    //  elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value= this.progreso;

    this.cambiaValor.emit(this.progreso);

  }

  cambiarValor(valor: number){
    if (this.progreso>=100 && valor>0){
      this.progreso = 100;
      return;
    }
    if (this.progreso<=0 && valor<=0){
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambiaValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();

  }

}
