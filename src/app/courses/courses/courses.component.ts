import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  coursesResult: Course[] = [];
  displayedColumns = ['name', 'category'];


  constructor(private courseService: CoursesService){

    this.courseService.list().subscribe((courses: Course[]) => {
      this.coursesResult = courses;
    });
  }

}
