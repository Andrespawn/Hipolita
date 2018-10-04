import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reporte-discrepancias',
  templateUrl: './reporte-discrepancias.component.html',
  styleUrls: ['./reporte-discrepancias.component.css']
})
export class ReporteDiscrepanciasComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  generarReporte(event) {
    event.preventDefault();
    const target = event.target;

    const fechIni: Date = target.querySelector('#txtFechIni').value;
    const fechFin: Date = target.querySelector('#txtFechFin').value;

    this.consumirServicio(fechIni, fechFin);

  }

  consumirServicio(fechaInicio, fechaFin) {
    console.log("fechIni: " + fechaInicio);
    console.log("fechFin: " + fechaFin);

    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '5a14178462d24ca39fc93398ee444a91',
      'Ocp-Apim-Trace':'true',
      'Cache-Control':'no-cache',
      'Content-Type': 'application/json',
      'SUsuario': 's',
      'SOrigenCliente': 'a',
      'Scanal': 'w',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
    });


    console.log(headers.get('Ocp-Apim-Subscription-Key'));
    const body: String = '{"Query": { "Date_start":"2018-08-31", "Date_end":"2018-09-01" } }';
    // const json = JSON.stringify(body);
    console.log("Body: " + body);
    //return this.httpClient.post('http://172.20.6.6:8184/cxf/reporteDiscrepancia', body, { headers }).subscribe(
      return this.httpClient.post('https://avapimgmtexpqa.azure-api.net/discrepancia/reporteDiscrepancia', body, { headers }).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('error', error);
      }
    );

  }
}
