import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../models/course';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LogicaService {
  pathUrl = 'https://canvas-api2019.herokuapp.com/api/courses/';
  pathfake = '/assets/data/data.json';

  constructor(private Http: HttpClient) { }

  getCourses() {
    return this.Http.get(this.pathUrl);
  }

  getCourseData( id ): Observable<Course[]> {
    return this.Http.get<Course[]>( this.pathUrl + id + '/enrollments' );
  }
}

