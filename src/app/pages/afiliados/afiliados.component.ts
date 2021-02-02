import { Component } from '@angular/core';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css'],
})
export class AfiliadosComponent {
  afiliados: any[] = [{
      cod: 1,
      titulo:'gocheka',
      categoria: 'Marquetin Digital',
      imagen: "project-1.jpg"
    },
    {
      cod: 2,
      titulo:'Centro Medico',
      categoria: 'Hospital',
      imagen: "project-2.jpg"
    },
    {
      cod: 3,
      titulo:'Atlasolar',
      categoria: 'Calentadores',
      imagen: "project-3.jpg",
      
    

    },{
      cod: 4,
      titulo:'Zogga',
      categoria: 'Boutique',
      imagen: "project-4.jpg"
    },
  ];

  constructor() {
    console.log(this.afiliados);
  }
}
