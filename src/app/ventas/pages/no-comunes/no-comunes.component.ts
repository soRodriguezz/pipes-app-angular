import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Sebastian';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Monica', 'Sebastian', 'Eduardo'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando',
  };

  cambiarNombre() {
    this.nombre = 'Fernanda';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Sebastian',
    edad: 25,
    direccion: 'Santiago, Chile'
  }

  //Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //async pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6,7,8..

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
  
}
