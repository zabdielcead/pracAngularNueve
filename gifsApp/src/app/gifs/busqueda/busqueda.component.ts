import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {


  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;


  constructor(private gifsService: GifsService){}

  buscar(
    //event: KeyboardEvent
      //busqueda:string
    ){
    console.log(this.txtBuscar);
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }

    console.log('valor serv')

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';

    //console.log(valor)
  }
}
