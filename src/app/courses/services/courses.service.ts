import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  allCourses = [{_id: '1', name:'Mat', category:'novo'}];
  responseData: Course[] = [];
  idParam = 1;
  constructor(private http: HttpClient) {

  }


  list(){
    return this.http.get('https://dmcqh7jfc4.execute-api.sa-east-1.amazonaws.com/dev', {params: {ID: this.idParam}}).pipe(
      map((response: any) => {
        const courses: Course[] = [];
        for (const course of response['Items']) {
          courses.push({
            _id: course.ID,
            name: course.name,
            category: course.category
          });
        }
        return courses;
      })
    )
  }
}
