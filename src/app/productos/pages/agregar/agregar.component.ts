import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})

export class AgregarComponent {

  color: string = 'red';
  texto: string = 'Esteban';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) {}

  hasError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarTexto(): void {
    this.texto = Math.random().toString();
  }

  cambiarColor(): void {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
