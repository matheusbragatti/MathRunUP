import { Course } from './../model/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [{_id: '1', name:'Mat', category:'novo'}];

  displayedColumns = ['name', 'category'];
  constructor(){

  }
}
