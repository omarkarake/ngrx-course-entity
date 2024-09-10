import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { select, Store } from "@ngrx/store";
import { filter, finalize, first, tap } from "rxjs/operators";
import { loadAllCourses } from "./courses.actions";
import { areCoursesLoaded } from "./courses.selectors";

@Injectable()
export class CourseResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap(coureseLoaded => {
        if (!this.loading && !coureseLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter(courseLoaded => courseLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
