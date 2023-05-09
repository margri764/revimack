import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

arrayTractors = [

    // Deutz_85
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

    // John_Deere_3530
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

    // John_Deere_3350_con_pala
    {
      img: "./assets/usados/tractores/John_Deere_3350_con_pala/John_Deere_3350_con_pala-1.jpeg",
      name: "John Deere 3350 con pala",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_3350_con_pala/John_Deere_3350_con_pala-2.jpeg",
      name: "John Deere 3350 con pala",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_3350_con_pala/John_Deere_3350_con_pala-3.jpeg",
      name: "John Deere 3350 con pala",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_3350_con_pala/John_Deere_3350_con_pala-4.jpeg",
      name: "John Deere 3350 con pala",
      category: "tractores-usados"
    },

    // John_Deere_5705
    {
      img: "./assets/usados/tractores/John_Deere_5705/Jhon_Deere_5705-01.jpeg",
      name: "John Deere 5705",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_5705/Jhon_Deere_5705-02.jpeg",
      name: "John Deere 5705",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_5705/Jhon_Deere_5705-03.jpeg",
      name: "John Deere 5705",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_5705/Jhon_Deere_5705-04.jpg",
      name: "John Deere 5705",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_5705/Jhon_Deere_5705-05.jpg",
      name: "John Deere 5705",
      category: "tractores-usados"
    },

    // John Deere 7505
    {
      img: "./assets/usados/tractores/John_Deere_7505/John_Deere_7505-1.jpg",
      name: "John Deere 7505",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_7505/John_Deere_7505-2.jpeg",
      name: "John Deere 7505",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_7505/John_Deere_7505-3.jpg",
      name: "John Deere 7505",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_7505/John_Deere_7505-4.jpg",
      name: "John Deere 7505",
      category: "tractores-usados"
    },
    {
      img: "./assets/usados/tractores/John_Deere_7505/John_Deere_7505-5.jpg",
      name: "John Deere 7505",
      category: "tractores-usados"
    },
   
   
]

arrayFumigador = [
  {
    img: "assets/usados/fumigador/Pla/pla-1.jpeg",
    name: "Fumigador Pla",
    category: "fumigadores-usados",
    data: "Año 2013. Sistema de alas actual.28 mts ancho de labor. 3100 lts de tanque aprox en fibra de vidrio. Computadora Sensor con mapeo y corte automático por secciones en 8 vías. Motor Deutz turbo de 6 cilindros con 142 hp. 4500 horas. Cañería de acero inoxidable con picos penta jet a 52 cms combinados con unijet a 35 cm. Gomas al 50% o más... Bomba de pulverización hypro de 390 lts/min con electroimán     Estado generalral muy bueno! Muy cuidada"
  },
  {
    img: "assets/usados/fumigador/Pla/pla-2.jpeg",
    name: "Fumigador Pla",
    category: "fumigadores-usados"
  },

  {
    img: "assets/usados/fumigador/Pla/pla-3.jpeg",
    name: "Fumigador Pla",
    category: "fumigadores-usados"
  },
  
  
  
 
]

arrayCosechadoras = [
]

arraySembradoras = [
]

arrayViales = [
]

arrayCarros = [
]


  private baseUrl: string = environment.baseUrl;
  hasRedirected : boolean = false;

  constructor( private http : HttpClient) { }


  getMachinesById(name: string, category: string) {
    const nameSlice = name.replace(/-\d+\.(jpg|png|jpeg)$/i, "");
  
    switch (category) {
      case "fumigadores-usados":
        return this.arrayFumigador.filter(fumig => fumig.name.includes(nameSlice));
        
      case "tractores-usados":
        return this.arrayTractors.filter(tractor => tractor.name.includes(nameSlice));
        
      default:
        return this.arrayTractors.filter(tractor => tractor.name.includes(nameSlice));
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
