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
 
  registrarUsario(){
    this.registrado= true;
    this.mensaje= "Usario registrado con éxtio con el nombre de: "+ this.nombre +" "+ this.apellido;
    
  }
}
