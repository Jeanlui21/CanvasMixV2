import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss']
})
export class OpcionesComponent implements OnInit {

  constructor(public modalEvento: MDBModalRef) { }

  ngOnInit() {
  }

  filtrar(){
    this.modalEvento.hide();
  }

}
