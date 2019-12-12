import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';



import { LogicaService } from 'src/app/services/logica.service';
import { Scores, Labels, dataSet } from 'src/app/models/constructor';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {


  actualName: string;
  actualId: string;
  score: Scores[] = [];
  label: Labels[] = [];
  data: dataSet[] = [];
  public cursos = [];
  
  constructor(private service: LogicaService, private router: Router, private active: ActivatedRoute) { }

  ngOnInit() {
    this.gettingParameters();
    
    this.service.getCourseData(this.actualId).subscribe(data =>{
      this.cursos = data;
      this.cursos.forEach(element => {
        this.data.push( new dataSet(element.grades.current_score, element.user.name));
      });
    });
    
  }

  

  redirectCurso(courseid, coursename){
    this.router.navigate(['curso', courseid, coursename]);
  }

   gettingParameters(){
    this.active.paramMap.subscribe(params => {this.actualName = params.get('coursename'); });
    this.active.paramMap.subscribe(params => {this.actualId = params.get('id'); });
  }


}
