import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";


export const loadAllCourses = createAction("[Courses] Load All Courses");
export const allCoursesLoaded = createAction(
  "[Courses] All Courses Loaded",
  props<{ courses: Course[] }>()
);
export const loadAllCoursesFailure = createAction(
  "[Courses] Load All Courses Failure"
);
