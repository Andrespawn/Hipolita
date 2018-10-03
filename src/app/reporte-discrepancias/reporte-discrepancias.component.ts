import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-discrepancias',
  templateUrl: './reporte-discrepancias.component.html',
  styleUrls: ['./reporte-discrepancias.component.css']
})
export class ReporteDiscrepanciasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generarReporte(event) {
    event.preventDefault();
    const target = event.target;
    
    const fechIni: Date = target.querySelector('#txtFechIni').value;
    const fechFin: Date = target.querySelector('#txtFechFin').value;
    

    console.log("fechIni: "+fechIni);
    console.log("fechFin: "+fechFin);

  }

}
