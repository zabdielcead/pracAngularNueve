import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {

  constructor(private gifsService: GifsService) { }


  get historial(){
    return this.gifsService.historial;
  }



  buscar(item:string){
    this.gifsService.buscarGifs(item);
  }

  

}
