import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchgifsResp } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root' //le dice a angular sera unico y global en el root
})
export class GifsService {

  private _historial: string [] = [];
  private apikey: string = 'zESB2NGXHXVfkpN2cYzCKJl3ADc80NO2';
  private servicioUrl: string  = 'https://api.giphy.com/v1/gifs';


  public resultados: Gif [] = [];

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if( localStorage.getItem('historial') ){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!); // el signo ! confiar para que no salga el error

    // }



  }



  //https://api.giphy.com/v1/gifs/search
  get historial(){
    //this._historial = this._historial.splice(0,10);
    return [...this._historial];
  }


  buscarGifs(query: string=''){
   // this._historial.unshift( query );

   query = query.trim().toLocaleLowerCase();
    
    if(!this._historial.includes(query) ){ //se va unsertar si no existe
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
                      .set( 'api_key' , this.apikey)
                      .set( 'limit' , '10')
                      .set( 'q' , query);


    this.http.get<SearchgifsResp>(`${this.servicioUrl}/search`, {params})
              .subscribe((resp) => {
                console.log(resp);
                this.resultados = resp.data;
                localStorage.setItem('resultados', JSON.stringify(this.resultados));
              })

    
    //console.log('service',this._historial);
  }

 
}
