import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpcionesComponent } from 'src/app/components/dashboard/opciones/opciones.component';

import { LogicaService } from 'src/app/services/logica.service';

import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cursos: any;
  course_Data: any;

  modalEvento: MDBModalRef;

  constructor(private router: Router, private modalService: MDBModalService, private service: LogicaService) { }

  ngOnInit() {
    this.service.getCourses().subscribe(result => this.cursos = result);
  }

  openOpciones() {
    this.modalEvento = this.modalService.show(OpcionesComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-full-height modal-left',
      containerClass: 'left',
      animated: true
  })
  }

  redirectCurso(courseid, coursename){
    this.router.navigate(['curso', courseid, coursename]);
  }

  course_data( id ){
    this.service.getCourseData(id).subscribe(result => this.course_Data = result);
    console.log(this.course_Data);
  }
  

}
