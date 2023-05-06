import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  arrayTractors = [
    {
      img: "assets/usados/tractores/Deutz_85/deutz85-1.jpeg",
      name: "Deutz 85",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/Deutz_85/deutz85-2.jpeg",
      name: "Deutz 85",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_3530/John-Deere-3530-1.jpeg",
      name: "John Deere 3530",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_3530/John-Deere-3530-2.jpeg",
      name: "John Deere 3530",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_3530/John-Deere-3530-3.jpeg",
      name: "John Deere 3530",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_3350_con_pala/John_Deere_3350_con_pala-1.jpeg",
      name: "John Deere 3350 con pala",
      category: "tractores-usados"
    },
   
]

arrayFumigador = [
  {
    img: "assets/usados/fumigador/Pla/pla-1.jpeg",
    name: "Fumigador Pla",
    category: "fumigadores-usados"
  },
  
 
]

  private baseUrl: string = environment.baseUrl;
  hasRedirected : boolean = false;

  constructor( private http : HttpClient) { }




  getMachinesById( id: number, category : string) {
    
    let fum = this.arrayFumigador[id]
    let item = this.arrayTractors[id];

    switch (category) {
      case "fumigadores-usados":
        
       return  this.arrayFumigador.filter(fumig => fum.name === fumig.name )
       case "tractores-usados":
            return this.arrayTractors.filter(tractor => item.name === tractor.name)
      default:
        return  this.arrayFumigador.filter(fumig => fum.name === fumig.name )
        break;
    }
  }

  sendEmail (body : string) {
 
    const headers = new HttpHeaders()
   headers.set('Content-Type', 'application/json');
   headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
   headers.set('Access-Control-Allow-Origin', '*');

   return this.http.post<any> (`${this.baseUrl}api/send-email/revimack/data`,body, {headers:headers})
 
  }
}
