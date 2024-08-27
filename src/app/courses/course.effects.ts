import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesHttpService } from "./services/courses-http.service";
import { CourseActions } from "./action.types";
import { concatMap, map } from "rxjs/operators";

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesHttp: CoursesHttpService
  ) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(() => this.coursesHttp.findAllCourses()),
      map((courses) => CourseActions.allCoursesLoaded({ courses }))
    )
  );
}
