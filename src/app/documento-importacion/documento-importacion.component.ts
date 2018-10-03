import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';


@Component({
  selector: 'app-documento-importacion',
  templateUrl: './documento-importacion.component.html',
  styleUrls: ['./documento-importacion.component.css']
})
export class DocumentoImportacionComponent implements OnInit {

  mostrarMensaje: Boolean = false;
  mensajeAlerta: String = '';
  constructor(private documentService: DocumentService) {
   }

  ngOnInit() {
  }
  buscarRuta(event) {
    event.preventDefault();

    this.mostrarMensaje = false;
    const target = event.target;
    const fechadoc: Date = target.querySelector('#txtDate').value;
    const nroGuia = target.querySelector('#nroShipment').value;
    const nroDocImport = target.querySelector('#nroDocImport').value;
    const validar =  this.validarCampos(nroDocImport, nroGuia, fechadoc);
    if (validar) {
      this.documentService.getData();
    }
  }
  validarCampos(NroImportacion, nroG, fecfecha, ) {
    if (NroImportacion === '' && fecfecha === '' && nroG === '') {
      this.mensajeAlerta = 'Debe diligenciar el numero de guia o las fechas a consultar. ';
      this.mostrarMensaje = true;
      return false;
    } else {
      this.mostrarMensaje = false;
      return true;
    }
  }
}
