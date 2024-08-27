import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { AppState } from "../reducers";
import { finalize, first, tap } from "rxjs/operators";
import { loadAllCourses } from "./course.actions";

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
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadAllCourses()); 
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
