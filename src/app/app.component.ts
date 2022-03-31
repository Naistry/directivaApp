import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  
  nombre:string = "";
  apellido:string = "";
  mensaje:string = "";
  registrado = false;
  entradas: any;

  constructor(){
    this.entradas= [

      {titulo: 'Python cada día más presente'},
      {titulo: 'Java presente hace más de 20 años'},
      {titulo: 'JavaScript cada vez más funcional'},
      {titulo: 'Kotlin potencia para tus apps'},
      {titulo: '¿Dónde quedó pascal?'},
    ]
  }
 
  registrarUsario(){
    this.registrado= true;
    this.mensaje= "Usario registrado con éxtio con el nombre de: "+ this.nombre +" "+ this.apellido;
    
  }

  
}
