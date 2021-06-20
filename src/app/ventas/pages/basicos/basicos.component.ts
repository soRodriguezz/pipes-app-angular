import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Sebastian';
  nombreUpper: string = 'SEBASTIAN';
  nombreCompleto: string = 'sEBASTIAN RoDriguez';

  fecha: Date = new Date();

}
