import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { AppState } from "../reducers";
import { filter, finalize, first, tap } from "rxjs/operators";
import { loadAllCourses } from "./course.actions";
import { areCoursesLoaded } from "./courses.selectors";

@Injectable({
  providedIn: "root",
})
export class CourseResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}
  loading = false;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap((cousesLoaded) => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter((couresesLoaded) => couresesLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
