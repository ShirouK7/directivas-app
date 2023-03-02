import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})

export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _msg: string = 'Valor';
  private _valido: boolean = false;
  htmlElement: ElementRef<HTMLElement>;
  
  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._msg = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    this._valido = valor;
    this.setValidacion();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClass();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  } 

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._msg;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setValidacion(): void {
    if(this._valido === true) {
      this.htmlElement.nativeElement.classList.add('hidden');
    }
    else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }

  }

}
